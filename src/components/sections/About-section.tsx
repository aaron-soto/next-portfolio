import SectionHeading from "../SectionHeading";

export default function AboutSection() {
  return (
    <div>
      <div className="container py-8 sm:py-20">
        <SectionHeading title="About" />
        <p className="mb-4 text-white/70">
          I&apos;m a web developer based in Arizona with a passion for creating
          innovative web solutions. After serving as a{" "}
          <span className="underline text-yellow-100">
            sergeant in the 75th Ranger Regiment
          </span>
          , I transitioned to web development, finding excitement in the
          creative challenges it offers. I specialize in technologies like
          Nextjs, Angular, C#/.NET, JavaScript, and AWS, constantly building new
          projects and learning the latest advancements to enhance my skills.
        </p>
        <p className="mb-4 text-white/70">
          I am dedicated to delivering high-quality, scalable web applications
          and always eager to tackle new challenges. Please explore my portfolio
          to see my work, and feel free to reach out if you have any
          opportunities or questions.
        </p>

        <a href="#!">Read more...</a>

        {/* <div className="relative p-[4px] rounded-[14px] bg-white h-96 border border-gray-400 my-2">
          <iframe
            src="https://www.loom.com/embed/c641dba088fd4ccf9b573507885d255c?sid=98f33874-4eb6-436b-bb39-0fdecd6dbb59"
            allowFullScreen
            className="h-full w-full rounded-[10px]"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}
