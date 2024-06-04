import { PROJECTS } from '@/lib/data';
import { Github, Link } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Tag from '../Tag';
import SectionHeading from '../SectionHeading';

const ProjectsSection = () => {
  return (
    <div className="container py-20">
      <SectionHeading
        title="Projects"
        description="Stay up to date with my latest projects and experiments."
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border group relative overflow-hidden col-span-2 border-green-800 flex flex-col">
          <div className="mb-2">
            <Tag size="sm" color="green">
              Featured
            </Tag>
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:underline">Repo Purge</h3>

          <p className="text-gray-400 mb-8">
            RepoPurge is a web application designed to streamline the process of
            deleting GitHub repositories. By allowing users to bulk delete
            repositories, RepoPurge simplifies GitHub account management for
            developers and organizations.
          </p>
          <div className="flex gap-2">
            <Tag size="sm" color="black">
              NextJs
            </Tag>
            <Tag size="sm" color="black">
              TailwindCSS
            </Tag>
            <Tag size="sm" color="black">
              Github Auth API
            </Tag>

            <Image
              className="absolute right-12 top-full -translate-y-8 border rounded-xl pt-6 border-gray-700 p-2 bg-black group-hover:-translate-y-32 clean-out transition-transform hidden md:block"
              width={300}
              height={300}
              alt="repo purge screenshot"
              src="/images/screenshot.png"
            ></Image>
          </div>
          <div className="flex gap-2 mt-4">
            <a
              className={buttonVariants({
                size: 'sm',
                className: 'text-sm',
              })}
              href="https://repopurge.com"
            >
              Visit Website
            </a>

            <a
              className={buttonVariants({
                size: 'sm',
                variant: 'secondary',
                className: 'text-sm',
              })}
              href="https://github.com/aaron-soto/repo-purge"
            >
              Visit Project Code
            </a>
          </div>
        </div>

        {PROJECTS.map((project, idx) => (
          <div key={idx} className="p-4 border border-gray-800 flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <div className="flex gap-4">
                <Github className="w-4 h-4 " />
                <Link className="w-4 h-4 " />
              </div>
            </div>
            <p className="text-gray-400 mb-8">{project.description}</p>

            <div className="flex gap-2 mt-auto">
              {project.tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
