# Abdul Tayab — Personal Portfolio Website

A clean, light, smooth, and premium personal portfolio website for **Abdul Tayab** (Software Engineer & AI/ML Specialist), built using **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Lenis**.

---

## 🚀 How to Run the Site

### Prerequisites
- Node.js 18.x or 20.x+
- npm / pnpm / yarn / bun

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📑 Sections Table

| # | Section | Nav Link | Description |
|---|---------|----------|-------------|
| 00 | **Hero** | — | Looping video intro, audio unlock control, ghost headline, role summary & CTAs |
| 01 | **About** | `About` | Hanging lanyard ID card with pendulum physics and 3D flip card, verbatim summary, quick facts |
| 02 | **Skills** | `Skills` | Periodic table of stack with 8-col grid, family filters, diagonal wave reveal, sticky 320px inspector panel |
| 03 | **Work** | `Work` | Expanding accordion gallery with flex: 8 active state, grayscale illustrative UI mockups |
| 04 | **Certifications** | `Certifications` | Ink-flood index with left-to-right scaleX hover animation and direct verification links |
| 05 | **Experience** | `Experience` | Combined education & experience vertical timeline with scroll progress spine drawing |
| 06 | **Achievements** | `Achievements` | Sticky 100svh pinned horizontal gallery with 72px platform logos and countup animation |
| 07 | **Contact & Footer** | `Contact` | Letter-bounce headline, aria-live copy email chip, spinning badge, academic references, back-to-top |

---

## 🎬 How to Rebuild Hero Video Assets

The hero video and image pipeline script is located at `scripts/build-hero-assets.py`.

### Requirements:
- Python 3.9+
- `ffmpeg` (with `libx264`, `libvpx-vp9`, `aac`, `libopus`, `libwebp`)
- Python packages: `numpy`, `scipy`

### Running the pipeline:
```bash
python scripts/build-hero-assets.py
```

### Pipeline Steps:
1. **Crop & Centering:** Crops `Man_introducing_himself_1080p_20261003225731.mp4` to `800:1000` centered on the speaker and scales to `768:960`.
2. **Background Whitening:** Applies `colorlevels` curve filter (`rimax=0.95:gimax=0.95:bimax=0.95`) to push off-white backdrop to pure `#ffffff` so it blends seamlessly into the page background (`--paper`).
3. **Seamless Audio/Video Crossfade:** Uses ffmpeg `xfade` for video and sample-accurate numpy linear interpolation for audio to prevent clicks and visible jumps.
4. **Export Formats:** Generates `public/hero/hero.mp4` (H.264) and `public/hero/hero.webm` (VP9), `public/portrait-bust.webp` (480x600), and `public/og.jpg` (1200x630).

---

## 🎨 Brand Logos Credits & Licences

All brand icons in `public/logos` are fetched from open-source repositories:
- **Devicon** (MIT License) – [github.com/devicons/devicon](https://github.com/devicons/devicon)
- **Simple Icons** (CC0 1.0 Universal) – [github.com/simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)

All brand trademarks belong to their respective owners. Used strictly for technical skill representation.
