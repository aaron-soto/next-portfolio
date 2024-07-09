import Blobs from '../blobs';

const QuoteSection = () => {
  return (
    <div className="relative">
      <Blobs className="w-full" />

      <div className="z-10 py-24 container">
        <div className="border-2 border-gray-700/60 bg-black/60 backdrop-blur-lg p-8 rounded-lg">
          <blockquote className="font-light text-lg">
            I worked with Aaron for a few years and he was always a pleasure to
            work with. He is a very talented developer and has a great eye for
            design. He is always willing to help out and go the extra mile to
            make sure the job gets done right. I would highly recommend Aaron
            for any web development project.
          </blockquote>
          <p className="mt-4">- Former Allata Coworker</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
