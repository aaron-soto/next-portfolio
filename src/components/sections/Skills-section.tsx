import { SKILLS } from '@/lib/data';
import Tag from '../Tag';
import SectionHeading from './../SectionHeading';

export default function SkillsSection() {
  return (
    <div className="container py-20">
      <SectionHeading
        title="My Skillset"
        description="My skill set is always evolving as I spend my free time learning new
        technologies through side projects."
      />
      <div className="flex gap-2 flex-wrap">
        {SKILLS.map((skill, idx) => (
          <Tag key={idx} size="md">
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}
