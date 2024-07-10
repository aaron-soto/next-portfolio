import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface MailOptions {
  to: string;
  from?: string;
  subject: string;
  text?: string;
  templateId?: string;
  dynamicTemplateData?: { [key: string]: any };
}

export async function sendMail({ to, from, subject, text, templateId, dynamicTemplateData }: MailOptions) {
  const msg: any = {
    to,
    from: from || `Aaron Soto <${process.env.SENDGRID_EMAIL}>`,
    subject,
    text,
  };

  if (templateId) {
    msg.templateId = templateId;
    msg.dynamic_template_data = dynamicTemplateData;
  }

  try {
    const response = await sgMail.send(msg);
    console.log('Message sent: %s', response[0].statusCode);
  } catch (error: any) {
    console.error('Error sending email: ', error);
    throw new Error(error.message);
  }
}
