// app/api/send-email/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { email, subject, message } = await req.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // Set up email options
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "success" });
  } catch (error: any) {
    return NextResponse.json({ status: "error", message: error.message });
  }
}
