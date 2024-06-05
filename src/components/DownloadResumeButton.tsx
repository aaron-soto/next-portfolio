"use client";

import { Button } from "@/components/ui/button";

const DownloadResumeButton = () => {
  return (
    <Button
      variant="secondary"
      className="ml-4 rounded-lg"
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/files/resume.pdf"; // Path to your resume in the public directory
        link.download = "aaron_soto_resume.pdf"; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      Download Resume
    </Button>
  );
};

export default DownloadResumeButton;
