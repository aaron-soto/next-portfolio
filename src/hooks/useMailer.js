import { useState } from "react";

const useMailer = () => {
  const [status, setStatus] = useState(null);

  const sendEmail = async (emailData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      setStatus(result.status);
    } catch (error) {
      setStatus("error");
    }
  };

  return { status, sendEmail };
};

export default useMailer;
