'use client';

import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (email: {
    to: string;
    subject: string;
    text: string;
  }) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    });
    return response.json();
  };

  const handleSuccess = async () => {
    toast({
      title: 'Success',
      description: 'Thank you for your message!',
      variant: 'default',
    });

    await sendEmail({
      to: 'aaron@aaronsoto.io',
      subject: 'New Contact Form Submission',
      text: `${emailData.name} has signed up with the email: ${emailData.email}`,
    });

    setEmailData({ name: '', email: '', message: '' });
  };

  const handleError = () => {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const email = {
        to: emailData.email,
        subject: `New message from ${emailData.name}`,
        text: emailData.message,
      };

      const result = await sendEmail(email);

      if (result.success) {
        await handleSuccess();
      } else {
        handleError();
      }
    } catch (error) {
      handleError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grainy">
      <div className="py-8 container">
        <SectionHeading
          className="text-black"
          title="Contact"
          description="Feel free to reach out to me for any inquiries or just to say hi!"
        />
        <form onSubmit={handleSubmit}>
          <Input
            className="bg-white mb-4 max-w-96"
            placeholder="Your Name"
            type="text"
            name="name"
            value={emailData.name}
            onChange={handleChange}
            required
          />
          <Input
            className="bg-white mb-4 max-w-96"
            placeholder="Your Email"
            type="email"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            className="bg-white mb-4 max-w-96"
            placeholder="Message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="secondary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
