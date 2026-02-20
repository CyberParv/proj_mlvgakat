'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items?: { label: string; href: string }[];
}

export default function Navbar({
  title = "Detailing Bros",
  subtitle = "Performance Auto Detailing",
  ctaLabel = "Book Now",
  ctaHref = "/contact",
  items = [
    { label: "Inventory", href: "#inventory" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
}: NavbarProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#0A0A0A] text-white shadow-lg">
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-6 py-4")}>
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/images/hero.jpg" alt="Detailing Bros logo" width={800} height={600} className="h-10 w-10 rounded-md object-cover" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-bold uppercase tracking-wide">{title}</p>
            <p className="text-xs text-[#C0C0C0]">{subtitle}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold uppercase tracking-wide hover:text-[#D62828]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          className="bg-[#D62828] text-white hover:bg-[#b51f1f] font-bold uppercase tracking-wide"
          size="lg"
          onClick={() => {
            window.location.href = ctaHref;
          }}
        >
          {ctaLabel}
        </Button>
      </div>
    </header>
  );
}
