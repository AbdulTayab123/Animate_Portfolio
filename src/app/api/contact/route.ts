import { NextResponse, after } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    // 1️⃣ Save to Supabase (fast — 200ms)
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
    }

    // 2️⃣ Send email AFTER response is sent (background, doesn't block)
    after(async () => {
      const RESEND_KEY = process.env.RESEND_API_KEY;
      if (!RESEND_KEY) {
        console.warn('⚠️ RESEND_API_KEY not set');
        return;
      }

      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${RESEND_KEY}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'abdultayab696@gmail.com',
            reply_to: email,
            subject: `📬 New message from ${name}`,
            html: `
              <div style="font-family: -apple-system, sans-serif; max-width: 600px; padding: 24px;">
                <h2 style="color: #0d0d0d;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            `,
          }),
        });

        if (!res.ok) {
          console.error('❌ Resend failed:', await res.text());
        } else {
          console.log('✅ Email sent');
        }
      } catch (err) {
        console.error('❌ Resend error:', err);
      }
    });

    // 3️⃣ Return immediately — no waiting!
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}