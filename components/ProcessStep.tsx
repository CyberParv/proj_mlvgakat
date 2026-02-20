import { cn } from "@/lib/utils";

interface ProcessStepProps {
  title: string;
  subtitle?: string;
  items?: string[];
  step: number;
  isLast?: boolean;
}

export default function ProcessStep({
  title,
  subtitle,
  step,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D62828] text-lg font-bold text-[#D62828]">
          {step}
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-[#C0C0C0]" />}
      </div>
      <div className={cn("pb-8")}>
        <p className="text-lg font-bold uppercase text-[#0A0A0A]">{title}</p>
        {subtitle && <p className="text-sm text-[#6b6b6b]">{subtitle}</p>}
        <p className="mt-2 text-sm text-[#444]">
          We follow a meticulous process to ensure each vehicle looks and feels brand new.
        </p>
      </div>
    </div>
  );
}
