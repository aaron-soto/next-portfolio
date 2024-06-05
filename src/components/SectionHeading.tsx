import { cn } from "@/lib/utils";

const SectionHeading = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h2
        className={cn(
          "text-2xl font-semibold mb-2",
          description === null ? "mb-0" : ""
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mb-4 text-opacity-50" style={{ opacity: 0.7 }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
