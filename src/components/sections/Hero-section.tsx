import DownloadResumeButton from '@/components/DownloadResumeButton';
import Link from 'next/link';
import Blobs from '../blobs';
import { buttonVariants } from '../ui/button';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[600px]">
      <div className="container">
        <p className="flex items-center border-[3px] border-green-500 bg-green-900 mb-4 px-3 py-2 rounded-[8px] w-fit font-semibold text-xs tracking-wide">
          <span className="relative mr-3 w-[13px] h-[13px]">
            <span className="absolute bg-green-500 rounded-full w-full h-full animate-ping"></span>
            <span className="absolute bg-green-500 rounded-full w-full h-full"></span>
          </span>
          <span className="font-light text-md">Searching for Work</span>
        </p>

        <h1 className="z-10 font-light text-4xl">
          I develop web apps that make conversions and keep users engaged
        </h1>
        <Link
          href="contact"
          className={buttonVariants({
            variant: 'default',
            className: 'mt-8 rounded-lg',
          })}
        >
          Let&apos;s work together
        </Link>
        <DownloadResumeButton />
      </div>

      <Blobs />
    </div>
  );
};

export default HeroSection;
