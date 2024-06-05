import { slugify } from "@/lib/utils";
import { Link } from "lucide-react";

const BlogSectionHeading = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h2
      className="pb-1 group border-l-4 pl-2 border-yellow-200/80 text-xl font-bold mt-6 mb-2 scroll-m-20"
      id={slugify(title)}
    >
      <a href={`#${slugify(title)}`} className="flex">
        {title} <Link size={24} className="ml-2 hidden group-hover:block" />
      </a>
    </h2>
  );
};

export default BlogSectionHeading;
