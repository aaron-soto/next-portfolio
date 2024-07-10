import { sendMail } from '@/lib/mailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { to, from, subject, text, templateId, dynamicTemplateData, honeypot } = await req.json();

  // Check for honeypot field
  if (honeypot) {
    return new Response(JSON.stringify({ success: false, error: 'Spam detected' }), { status: 400 });
  }

  try {
    await sendMail({ to, from, subject, text, templateId, dynamicTemplateData });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
