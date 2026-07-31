import { Resend } from 'resend';

// Where contact-form submissions should be delivered.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'bsrinivasan2004@gmail.com';

// Very small helper to avoid obviously fake/empty submissions.
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      // Fail loudly in logs so the site owner notices misconfiguration,
      // but keep the message to the visitor generic.
      console.error(
        'RESEND_API_KEY is not set. Contact form cannot send email.'
      );
      return Response.json(
        {
          success: false,
          message:
            'Message could not be sent right now. Please email me directly instead.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // Resend's shared sandbox sender. Once you verify your own domain
      // in Resend, replace this with e.g. 'Portfolio <contact@yourdomain.com>'.
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      {
        success: false,
        message:
          'Something went wrong sending your message. Please email me directly instead.',
      },
      { status: 500 }
    );
  }
}
