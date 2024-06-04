import Link from 'next/link';
import Blobs from '../blobs';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <div className="h-[600px] relative  flex flex-col justify-center items-center">
      <div className="container">
        <h1 className="text-4xl font-light z-10">
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
        <Button variant="secondary" className='ml-4 rounded-lg'>Download Resume</Button>
      </div>
      <Blobs />
    </div>
  );
};

export default HeroSection;
