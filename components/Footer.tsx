'use client';

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FooterProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Footer({
  title = "Detailing Bros",
  subtitle = "Premium Auto Detailing",
  ctaLabel = "Join Newsletter",
  ctaHref = "/",
}: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className={cn("mx-auto max-w-7xl px-6 py-16")}>
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/about.jpg" alt="Detailing Bros logo" width={800} height={600} className="h-10 w-10 rounded-md object-cover" />
              <div>
                <p className="text-lg font-bold uppercase">{title}</p>
                <p className="text-xs text-[#C0C0C0]">{subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-[#C0C0C0]">
              Precision detailing, ceramic protection, and showroom finishes for enthusiasts who demand the best.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase">Navigation</p>
            <div className="flex flex-col gap-2 text-sm text-[#C0C0C0]">
              <Link href="#inventory" className="hover:text-white">Inventory</Link>
              <Link href="#services" className="hover:text-white">Services</Link>
              <Link href="#featured" className="hover:text-white">Featured</Link>
              <Link href="#contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold uppercase">Contact</p>
            <div className="space-y-2 text-sm text-[#C0C0C0]">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D62828]" /> 728 Apex Ave, Motor City</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#D62828]" /> (555) 219-1188</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#D62828]" /> hello@detailingbros.com</p>
            </div>
            <div className="pt-2 text-xs text-[#C0C0C0]">
              Mon-Fri: 8am - 7pm<br />
              Sat: 9am - 5pm<br />
              Sun: Closed
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase">Newsletter</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="space-y-3"
            >
              <Input type="email" placeholder="Email address" className="bg-white/5 text-white placeholder:text-[#C0C0C0]" />
              <Button className="w-full bg-[#D62828] text-white hover:bg-[#b51f1f] uppercase font-bold">
                {ctaLabel}
              </Button>
            </form>
            <p className="text-xs text-[#C0C0C0]">Get detailing tips, service specials, and event invites.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[#C0C0C0]">
          © {new Date().getFullYear()} Detailing Bros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
