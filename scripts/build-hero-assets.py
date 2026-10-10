import os
import subprocess
import numpy as np
import scipy.io.wavfile as wav

def main():
    video_in = "Man_introducing_himself_1080p_20261003225731.mp4"
    os.makedirs("public/hero", exist_ok=True)
    os.makedirs("public", exist_ok=True)

    # Crop: crop=800:1000:560:40, scale=768:960
    # Whiten bg: colorlevels=rimax=0.95:gimax=0.95:bimax=0.95
    vf_pipeline = (
        "crop=800:1000:560:40,"
        "scale=768:960,"
        "colorlevels=rimax=0.95:gimax=0.95:bimax=0.95"
    )

    # Extract audio to wav for seamless numpy crossfade
    wav_temp = "temp_audio.wav"
    subprocess.run(["ffmpeg", "-y", "-i", video_in, "-vn", "-ac", "2", "-ar", "48000", wav_temp], check=True)

    sr, audio = wav.read(wav_temp)
    fade_len = int(0.5 * sr) # 24000 samples
    total_len = len(audio) # 480000
    out_len = total_len - fade_len # 456000

    out_audio = audio[:out_len].copy().astype(np.float32)
    fade_out_weight = np.linspace(1.0, 0.0, fade_len)[:, np.newaxis]
    fade_in_weight = np.linspace(0.0, 1.0, fade_len)[:, np.newaxis]

    audio_start = audio[:fade_len].astype(np.float32)
    audio_end = audio[out_len:].astype(np.float32)

    looped_head = audio_start * fade_in_weight + audio_end * fade_out_weight
    out_audio[:fade_len] = looped_head

    out_audio_int16 = np.clip(out_audio, -32768, 32767).astype(np.int16)
    wav_looped = "temp_audio_looped.wav"
    wav.write(wav_looped, sr, out_audio_int16)

    # Video xfade with ffmpeg
    filter_complex = (
        f"[0:v]split=2[v1][v2];"
        f"[v1]trim=0:9.5,setpts=PTS-STARTPTS,{vf_pipeline}[v1_proc];"
        f"[v2]trim=0.5:10,setpts=PTS-STARTPTS,{vf_pipeline}[v2_proc];"
        f"[v1_proc][v2_proc]xfade=transition=fade:duration=0.5:offset=9.0[v_out]"
    )

    # Render hero.mp4
    cmd_mp4 = [
        "ffmpeg", "-y",
        "-i", video_in,
        "-i", wav_looped,
        "-filter_complex", filter_complex,
        "-map", "[v_out]",
        "-map", "1:a",
        "-c:v", "libx264",
        "-crf", "24",
        "-preset", "slow",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "96k",
        "-movflags", "+faststart",
        "public/hero/hero.mp4"
    ]
    print("Building hero.mp4...")
    subprocess.run(cmd_mp4, check=True)

    # Render hero.webm
    cmd_webm = [
        "ffmpeg", "-y",
        "-i", "public/hero/hero.mp4",
        "-c:v", "libvpx-vp9",
        "-crf", "36",
        "-b:v", "0",
        "-c:a", "libopus",
        "-b:a", "80k",
        "public/hero/hero.webm"
    ]
    print("Building hero.webm...")
    subprocess.run(cmd_webm, check=True)

    # Clean temp wav files
    if os.path.exists(wav_temp): os.remove(wav_temp)
    if os.path.exists(wav_looped): os.remove(wav_looped)

    # Step 5: Render portrait-bust.webp (480x600 head-to-shirt crop)
    cmd_bust = [
        "ffmpeg", "-y",
        "-ss", "2.0",
        "-i", video_in,
        "-vframes", "1",
        "-vf", "crop=600:750:660:60,scale=480:600,colorlevels=rimax=0.95:gimax=0.95:bimax=0.95",
        "public/portrait-bust.webp"
    ]
    print("Building portrait-bust.webp...")
    subprocess.run(cmd_bust, check=True)

    # Render og.jpg (1200x630)
    cmd_og = [
        "ffmpeg", "-y",
        "-ss", "2.0",
        "-i", video_in,
        "-vframes", "1",
        "-vf", "crop=1200:630:360:100,scale=1200:630,colorlevels=rimax=0.95:gimax=0.95:bimax=0.95",
        "public/og.jpg"
    ]
    print("Building og.jpg...")
    subprocess.run(cmd_og, check=True)

    print("Hero video assets build complete!")

if __name__ == '__main__':
    main()
