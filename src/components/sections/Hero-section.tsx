import Link from "next/link";
import Blobs from "../blobs";
import { Button, buttonVariants } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="h-[600px] relative  flex flex-col justify-center items-center">
      <div className="container">
        <p className="bg-green-900 border-[3px] tracking-wide border-green-500 font-semibold mb-4 rounded-[1em] w-fit py-2 px-3 text-xs flex items-center">
          <span className="w-4 h-4 mr-3 relative">
            <span className="bg-green-500 absolute h-full w-full rounded-full animate-ping"></span>
            <span className="bg-green-500 absolute h-full w-full rounded-full"></span>
          </span>
          Searching for Work
        </p>

        <h1 className="text-4xl font-light z-10">
          I develop web apps that make conversions and keep users engaged
        </h1>
        <Link
          href="contact"
          className={buttonVariants({
            variant: "default",
            className: "mt-8 rounded-lg",
          })}
        >
          Let&apos;s work together
        </Link>
        <Button variant="secondary" className="ml-4 rounded-lg">
          Download Resume
        </Button>
      </div>

      <Blobs />
    </div>
  );
};

export default HeroSection;
