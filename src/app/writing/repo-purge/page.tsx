import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import BlogSectionHeading from "./../../../components/blog/BlogSectionHeading";
import { Separator } from "@/components/ui/separator";
import Tag from "./../../../components/Tag";

const Page = () => {
  return (
    <div className="w-full">
      <div className="mt-24 container">
        <div className="image-wrapper rounded-[.8em] overflow-hidden h-[300px] w-full">
          <Image
            className="w-full bg-bottom"
            alt="Screenshot of the Repo Purge application"
            width={400}
            height={200}
            src="/images/car.jpg"
          ></Image>
        </div>
        <div className="mt-4 flex items-center">
          <Image
            height={20}
            width={20}
            alt="photo of aaron soto"
            className="rounded-full w-8 h-8"
            src="/images/aaron.jpg"
          />
          <span className="ml-4">
            Aaron Soto /
            <time className="ml-1" dateTime="06/05/2024">
              June 5, 2024
            </time>
          </span>
        </div>

        <p className="my-8">
          <span className="text-yellow-300">TLDR: </span> I was laid off and
          wanted something to work on in the meantime. Additionally, I needed to
          clean up my GitHub account since recruiters would now be looking at
          it. I decided to create a small application that would allow me to
          easily select and delete multiple repositories at once.
        </p>

        <div className="flex gap-2">
          <Tag size="sm" color="black">
            TypeScript
          </Tag>
          <Tag size="sm" color="black">
            NextJS
          </Tag>
          <Tag size="sm" color="black">
            App Development
          </Tag>
        </div>

        {/* table of contents */}
        <div className="hidden md:block my-12">
          <SectionHeading title="Table of Contents" />
          <ul className="text-white/70 text-md leading-7 font-light">
            <li>
              <a
                className="hover:text-yellow-200"
                href="#why-i-created-repo-purge"
              >
                Why I Created Repo Purge
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-200"
                href="#who-repo-purge-is-for"
              >
                Who Repo Purge Is For
              </a>
            </li>
            <li>
              <a
                className="hover:text-yellow-200"
                href="#my-development-process"
              >
                My Development Process
              </a>

              <ul className="ml-6">
                <li>
                  <a
                    className="hover:text-yellow-200"
                    href="#planning-and-design"
                  >
                    Planning and Design
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-200" href="#implementation">
                    Implementation
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-yellow-200"
                    href="#testing-and-deployment"
                  >
                    Testing and Deployment
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-yellow-200"
                    href="#user-feedback-and-improvements"
                  >
                    User Feedback and Improvements
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:text-yellow-200" href="#conclusion">
                Conclusion
              </a>
            </li>
          </ul>
        </div>

        <Separator className="my-8" />

        <div className="relative p-0 md:p-[4px] md:rounded-[14px] bg-white h-96 border-none md:border md:border-gray-400 my-2">
          <iframe
            src="https://www.loom.com/embed/c641dba088fd4ccf9b573507885d255c?sid=98f33874-4eb6-436b-bb39-0fdecd6dbb59"
            allowFullScreen
            className="h-full w-full md:rounded-[10px]"
          ></iframe>
        </div>

        <Separator className="my-8" />

        <article className="mt-4">
          <section>
            <BlogSectionHeading title="Why I Created Repo Purge" />
            <p>
              As a developer, I often found myself accumulating a large number
              of GitHub repositories over time. Whether it was from my coding
              bootcamp, which had me creating repositories for each new project,
              or my full-time job as a consultant, where I was on a new project
              every few months, the result was the same. Many of these
              repositories were created for testing, learning, or temporary
              projects that I no longer needed. Deleting each repository
              manually was a tedious and time-consuming process through the{" "}
              <a href="https://github.com">GitHub Website</a>. This frustration
              led me to develop{" "}
              <a
                href="https://repopurge.com"
                className="text-yellow-300 underline"
                target="_blank"
              >
                Repo Purge
              </a>{" "}
              – a tool designed to streamline the bulk deletion of GitHub
              repositories.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <BlogSectionHeading title="Who Repo Purge Is For" />
            <p>
              Repo Purge is for developers, students, and hobbyists who manage
              numerous repositories on GitHub. Whether you are cleaning up old
              projects, organizing your work, or simply want to declutter your
              GitHub account, Repo Purge provides a quick and efficient solution
              to delete multiple repositories at once. By simplifying this often
              cumbersome task, Repo Purge allows users to maintain a cleaner and
              more organized GitHub profile.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <BlogSectionHeading title="My Development Process" />
            <p>The development of Repo Purge involved several key steps:</p>
            <h3
              className="text-lg mt-4 mb-1 font-semibold scroll-m-20"
              id="planning-and-design"
            >
              <a href="#planning-and-design">Planning and Design</a>
            </h3>
            <p>
              I started by identifying the core features and functionality that
              Repo Purge needed. This included GitHub authentication, repository
              listing, and bulk deletion. I designed a simple and intuitive user
              interface to ensure a seamless user experience. Some solutions I
              found online to this problem were either too bulky for what I
              needed or seemed outdated. I wanted to create a modern, efficient
              tool tailored to the specific needs of developers today.
            </p>
            <h3
              className="text-lg mt-4 mb-1 font-semibold scroll-m-20"
              id="implementation"
            >
              <a href="#implementation">Implementation</a>
            </h3>
            <p>
              I used{" "}
              <a href="https://nextjs.org/" target="_blank">
                Next.js
              </a>{" "}
              for the front-end and{" "}
              <a href="https://next-auth.js.org/" target="_blank">
                NextAuth.js
              </a>{" "}
              for authentication. The app integrates with the GitHub API to
              fetch user repositories and handle deletions. I implemented
              server-side components to manage the logic and data flow securely.
              The choice of Next.js allowed for a performant and scalable
              application, while NextAuth.js ensured secure authentication with
              GitHub.
            </p>
            <h3
              className="text-lg mt-4 mb-1 font-semibold scroll-m-20"
              id="testing-and-deployment"
            >
              <a href="#testing-and-deployment">Testing and Deployment</a>
            </h3>
            <p>
              Extensive testing was conducted to ensure the tool worked
              flawlessly across different scenarios and edge cases. After
              thorough testing, Repo Purge was deployed on{" "}
              <a href="https://vercel.com/" target="_blank">
                Vercel
              </a>{" "}
              for fast and reliable hosting. Vercel's platform provided an
              excellent environment for deploying the app, ensuring it was both
              accessible and performant for users.
            </p>
            <h3
              className="text-lg mt-4 mb-1 font-semibold scroll-m-20"
              id="user-feedback-and-improvements"
            >
              <a href="#user-feedback-and-improvements">
                User Feedback and Improvements
              </a>
            </h3>
            <p>
              After launching Repo Purge, I received valuable feedback from the
              developer community. Users appreciated the simplicity and
              efficiency of the tool, and some suggested additional features
              such as filtering repositories by criteria like creation date or
              size. Incorporating this feedback, I plan to release updates that
              will enhance the user experience further.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <BlogSectionHeading title="Conclusion" />
            <p>
              Repo Purge was born out of a personal need to manage my GitHub
              repositories more efficiently. It is a tool built by a developer
              for developers, designed to save time and simplify the process of
              repository management. I hope Repo Purge proves to be a valuable
              resource for the developer community. Its development journey was
              both challenging and rewarding, and I'm excited to share it with
              others who may benefit from its functionality.
            </p>
            <p>
              Feel free to try out{" "}
              <a href="https://yourwebsite.com/repo-purge" target="_blank">
                Repo Purge
              </a>{" "}
              and share your feedback. Happy coding!
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Page;
