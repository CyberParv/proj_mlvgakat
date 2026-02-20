import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  price: string;
  items: string[];
  ctaLabel?: string;
  ctaHref?: string;
  isPopular?: boolean;
}

export default function ServiceCard({
  title,
  subtitle,
  price,
  items,
  ctaLabel = "Reserve Detail",
  ctaHref = "/contact",
  isPopular = false,
}: ServiceCardProps) {
  return (
    <Card className={cn("relative overflow-hidden bg-white text-black shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl")}>
      {isPopular && (
        <Badge className="absolute right-4 top-4 bg-[#D62828] text-white">Popular</Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold uppercase tracking-wide">{title}</CardTitle>
        {subtitle && <CardDescription className="text-sm text-[#6b6b6b]">{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold text-[#0A0A0A]">{price}</div>
        <ul className="space-y-2 text-sm text-[#444]">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-[#D62828]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a
          href={ctaHref}
          className="w-full rounded-md bg-[#0A0A0A] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1c1c1c]"
        >
          {ctaLabel}
        </a>
      </CardFooter>
    </Card>
  );
}
