import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message, source } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const isHamzaPortfolio = source === 'hamza-hakim';
    const recipient = isHamzaPortfolio ? 'hamzahakim12235@gmail.com' : process.env.GMAIL_USER;
    const brandName = isHamzaPortfolio ? 'Hamza Hakim Portfolio' : 'HelixCore Studio';

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${brandName}" <${process.env.GMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New Project Inquiry from ${name}${isHamzaPortfolio ? ' (Hamza Portfolio)' : ''}`,
      text: `
New Project Inquiry - ${brandName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT INFORMATION
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

PROJECT DETAILS
Service Required: ${service}
Budget Range: ${budget || 'Not specified'}

MESSAGE
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply directly to: ${email}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully via Gmail SMTP' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
