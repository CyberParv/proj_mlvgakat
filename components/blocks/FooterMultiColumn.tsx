import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  items: FooterLink[];
}

interface ContactInfo {
  icon?: string;
  label: string;
  value: string;
}

interface FooterMultiColumnProps {
  brand: string;
  subtitle: string;
  items: FooterColumn[];
  contactInfo?: ContactInfo[];
  copyright?: string;
}

export default function FooterMultiColumn({ brand, subtitle, items, contactInfo, copyright }: FooterMultiColumnProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{subtitle}</p>
            {contactInfo && contactInfo.length > 0 && (
              <div className="mt-6 space-y-3">
                {contactInfo.map(function(info, index) {
                  return (
                    <div key={index} className="flex items-start gap-3 text-sm text-background/80">
                      {info.icon && <span className="text-lg">{info.icon}</span>}
                      <div>
                        <p className="font-semibold text-background">{info.label}</p>
                        <p className="text-background/70">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {items.map(function(col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.items.map(function(link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="my-8 h-px w-full bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('© ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
