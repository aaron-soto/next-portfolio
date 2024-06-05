"use client";

import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useMailer from "@/hooks/useMailer";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const { status, sendEmail } = useMailer();
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let email = {
      email: emailData.email,
      subject: `New message from ${emailData.name}`,
      message: emailData.message,
    };
    sendEmail(email);
  };

  return (
    <section className="grainy">
      <div className="container py-8">
        <SectionHeading
          className="text-black"
          title="Contact"
          description="Feel free to reach out to me for any inquiries or just to say hi!"
        ></SectionHeading>
        <form onSubmit={handleSubmit}>
          <Input
            className="mb-4 bg-white max-w-96"
            placeholder="Your Name"
            type="text"
            name="name"
            value={emailData.name}
            onChange={handleChange}
            required
          ></Input>
          <Input
            className="mb-4 bg-white max-w-96"
            placeholder="Your Email"
            type="text"
            name="email"
            value={emailData.email}
            onChange={handleChange}
            required
          ></Input>
          <Textarea
            className="mb-4 bg-white max-w-96"
            placeholder="Message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
          ></Textarea>
          <Button type="submit" variant="secondary">
            Send Message
          </Button>
        </form>
        {status && <p>Status: {status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
