import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: string;
  subtitle?: string;
}

export default function PriceTag({ price, subtitle = "Starting at" }: PriceTagProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-lg border border-[#C0C0C0] bg-gradient-to-r from-[#f2f2f2] to-white px-4 py-3 shadow-md")}>
      <div>
        <p className="text-xs uppercase text-[#6b6b6b]">{subtitle}</p>
        <p className="text-2xl font-bold text-[#0A0A0A]">{price}</p>
      </div>
      <div className="h-8 w-px bg-[#C0C0C0]" />
      <p className="text-xs uppercase text-[#D62828] font-bold">Premium Finish</p>
    </div>
  );
}
