import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Tag from "../Tag";
import SectionHeading from "../SectionHeading";

export default function ExperienceSection() {
  return (
    <div className="container py-20">
      <SectionHeading title="Experience" description="This is my professional experience in the web development world." />

      <div className="space-y-8">
        {EXPERIENCE.map((entry, idx) => {
          return (
            <div
              key={idx}
              className={cn(
                idx !== EXPERIENCE.length - 1 && "border-b border-gray-950",
                "flex flex-col sm:flex-row sm:justify-between sm:items-start pb-8"
              )}
            >
              <div className="text-gray-400 sm:mr-6">
                <p className="mb-1">
                  {entry.startDate} - {entry.endDate}
                </p>
              </div>
              <div className="flex-1">
                <p>
                  {entry.company}{" "}
                  <a href={entry.link} target="_blank">
                    <Link className="inline text-accentColor w-4 h-4 ms-1 mb-2" />
                  </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">{entry.title}</h3>
                <p className="text-gray-400 mb-4">{entry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
