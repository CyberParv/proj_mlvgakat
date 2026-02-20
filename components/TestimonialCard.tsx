import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  title?: string;
  subtitle?: string;
  name: string;
  vehicle: string;
  items?: string[];
  rating?: number;
}

export default function TestimonialCard({
  title = "Exceptional Finish",
  subtitle = "Detailing Bros exceeded expectations.",
  name,
  vehicle,
  rating = 5,
}: TestimonialCardProps) {
  const stars = Array.from({ length: rating }, (_, i) => i);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="bg-white text-black shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex gap-1 text-[#D62828]">
          {stars.map((star) => (
            <Star key={star} className="h-4 w-4 fill-[#D62828]" />
          ))}
        </div>
        <div>
          <p className="text-lg font-bold uppercase">{title}</p>
          <p className="text-sm text-[#5a5a5a]">{subtitle}</p>
        </div>
        <p className="text-sm text-[#333]">
          "The paint correction and ceramic coating brought my car back to life. The gloss is unreal."
        </p>
        <div className="flex items-center gap-3 pt-2">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] text-sm font-bold text-white")}>
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-[#6b6b6b]">{vehicle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
