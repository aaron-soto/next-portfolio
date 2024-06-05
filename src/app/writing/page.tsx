import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full">
      <div className="mt-24 container">
        <SectionHeading
          className="mb-8"
          title="Writing"
          description="My corner of the web where I like to write down my thoughts."
        />

        <Separator className="my-4" />

        <a href="/writing/repo-purge" className="group">
          <p className="text-lg group-hover:text-yellow-300">
            Creation of Repo Purge
          </p>
          <p className="text-white/70 text-sm mb-2">June 05, 2024</p>
          <p className="text-white/70">
            A quick look into what led me to develop and how I went about
            creating RepoPurge.
          </p>
          <Separator className="my-4" />
        </a>
      </div>
    </div>
  );
};

export default Page;
