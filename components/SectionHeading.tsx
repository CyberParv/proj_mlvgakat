import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-3xl font-bold uppercase tracking-wide text-[#0A0A0A] md:text-4xl">{title}</p>
      <div className="h-1 w-16 rounded-full bg-[#D62828]" />
      {subtitle && <p className="text-sm text-[#5a5a5a] md:text-base">{subtitle}</p>}
    </div>
  );
}
