'use client';

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

export default function GalleryImage({ title, subtitle, imageSrc }: GalleryImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <Image src={imageSrc} alt={title} width={1600} height={900} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-full flex-col items-center justify-center text-center text-white">
              <p className="text-lg font-bold uppercase">{title}</p>
              {subtitle && <p className="text-xs text-[#C0C0C0]">{subtitle}</p>}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className={cn("max-w-4xl border border-white/10 bg-[#0A0A0A] p-0")}>
        <Image src={imageSrc} alt={title} width={1600} height={900} className="h-full w-full object-cover" />
      </DialogContent>
    </Dialog>
  );
}
