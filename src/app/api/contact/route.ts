import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  countryCode: string;
  country: string;
  businessName: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.country || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format phone number with country code
    const fullPhone = data.phone
      ? `${data.countryCode} ${data.phone}`
      : 'Not provided';

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission - Goldfinch Representation</h2>

      <h3>Contact Details</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${fullPhone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Job Title</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.jobTitle || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Country</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.country}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.businessName || 'Not provided'}</td>
        </tr>
      </table>

      <h3>Message</h3>
      <div style="padding: 15px; background-color: #f5f5f5; border-left: 4px solid #FFD700; margin: 10px 0;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">
        This message was sent from the Goldfinch Representation website contact form.
      </p>
    `;

    const emailText = `
New Contact Form Submission - Goldfinch Representation

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${fullPhone}
- Job Title: ${data.jobTitle || 'Not provided'}
- Country: ${data.country}
- Business Name: ${data.businessName || 'Not provided'}

Message:
${data.message}

---
This message was sent from the Goldfinch Representation website contact form.
    `;

    // Send email
    await resend.emails.send({
      from: `"Goldfinch Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      replyTo: data.email,
      subject: `New Contact Form: ${data.name} - ${data.businessName || 'Goldfinch Inquiry'}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
