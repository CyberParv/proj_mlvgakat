import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Gauge } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: "shield" | "sparkles" | "gauge";
}

export default function FeatureCard({ title, subtitle, icon = "sparkles" }: FeatureCardProps) {
  const Icon = icon === "shield" ? Shield : icon === "gauge" ? Gauge : Sparkles;

  return (
    <Card className="bg-white text-black shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0A0A0A] text-white">
          <Icon className="h-6 w-6 text-[#D62828]" />
        </div>
        <div>
          <p className="text-lg font-bold uppercase">{title}</p>
          {subtitle && <p className="text-sm text-[#5a5a5a]">{subtitle}</p>}
        </div>
        <p className="text-sm text-[#444]">
          Precision craftsmanship with premium materials designed to protect and enhance performance vehicles.
        </p>
      </CardContent>
    </Card>
  );
}
