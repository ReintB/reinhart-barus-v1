import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'reintbarus@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
      from: 'reintbarus@gmail.com',
      to: 'reintbarus@gmail.com',
      subject: 'New Contact Form Message from ' + name,
      text: 'Name: ' + name + '\\nEmail: ' + email + '\\nMessage: ' + message,
      html: '<h3>New Contact Form Message</h3>' +
            '<p><strong>Name:</strong> ' + name + '</p>' +
            '<p><strong>Email:</strong> ' + email + '</p>' +
            '<p><strong>Message:</strong></p>' +
            '<p>' + message + '</p>'
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 