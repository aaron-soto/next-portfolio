// components/Blobs.js
import { cn } from "@/lib/utils";
import React from "react";

const Blobs = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "blobContainer ")}>
      <div className="blob blobR"></div>
      <div className="blob blobG"></div>
      <div className="blob blobB"></div>
    </div>
  );
};

export const BlobsBgs = () => {
  return (
    <>
      <div className="blob-overlay"></div>
      <div className="blobs-bg"></div>
    </>
  );
};

export default Blobs;
