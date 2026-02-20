import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export default function TeamMember({ title, subtitle, imageSrc }: TeamMemberProps) {
  return (
    <Card className="bg-white text-black shadow-lg">
      <CardContent className="space-y-4 p-6">
        <Image src={imageSrc} alt={title} width={800} height={600} className="h-48 w-full rounded-md object-cover" />
        <div>
          <p className="text-lg font-bold uppercase">{title}</p>
          {subtitle && <p className="text-sm text-[#D62828]">{subtitle}</p>}
        </div>
        <p className="text-sm text-[#5a5a5a]">
          Certified detailing specialist with a passion for perfect finishes and paint preservation.
        </p>
      </CardContent>
    </Card>
  );
}
