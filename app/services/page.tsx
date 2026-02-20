import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import { Card } from '@/components/ui/card';
import PriceTag from '@/components/PriceTag';

export default function ServicesPage() {
  const exteriorServices = [
    { name: 'Hand Wash & Dry', price: '$35', description: 'Gentle two-bucket hand wash with premium soap, microfiber dry, and tire shine' },
    { name: 'Clay Bar Treatment', price: '$75', description: 'Removes embedded contaminants for a glass-smooth finish' },
    { name: 'Single-Stage Polish', price: '$250', description: 'Machine polish to remove light swirls and enhance gloss' },
    { name: 'Paint Correction', price: '$450+', description: 'Multi-stage correction for heavy swirls, scratches, and oxidation' },
    { name: 'Ceramic Coating', price: '$599-$1,499', description: 'Professional-grade ceramic protection with 2-5 year durability' },
  ];

  const interiorServices = [
    { name: 'Interior Vacuum & Wipe', price: '$45', description: 'Thorough vacuum, dashboard wipe, and window cleaning' },
    { name: 'Deep Interior Clean', price: '$150', description: 'Steam cleaning, carpet extraction, and all-surface sanitization' },
    { name: 'Leather Conditioning', price: '$85', description: 'Clean, condition, and protect leather surfaces' },
    { name: 'Odor Elimination', price: '$75', description: 'Ozone treatment to permanently remove smoke, pet, and food odors' },
  ];

  const specialtyServices = [
    { name: 'Headlight Restoration', price: '$85', description: 'Restore clarity to yellowed, foggy headlights' },
    { name: 'Engine Bay Detail', price: '$95', description: 'Degrease and dress engine components for a showroom look' },
    { name: 'Paint Protection Film', price: 'Starting at $999', description: 'XPEL Ultimate Plus film installation for rock chip protection' },
    { name: 'Window Tinting', price: '$199-$499', description: 'Premium ceramic tint with lifetime warranty' },
  ];

  return (
    <main>
      <section className="min-h-[60vh]">
        <HeroImage
          title="Professional Detailing Services"
          subtitle="From quick washes to complete paint corrections, we offer comprehensive care for every vehicle"
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Get a Quote"
          primaryCtaHref="/contact"
        />
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Exterior Services" subtitle="Protect and enhance your paint, wheels, and trim" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {exteriorServices.map((service) => (
              <Card key={service.name} className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <PriceTag price={service.price} />
                </div>
                <p className="mt-3 text-base md:text-lg text-[#6B6B6B]">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Interior Services" subtitle="Deep-clean, restore, and protect your cabin" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {interiorServices.map((service) => (
              <Card key={service.name} className="p-6 bg-[#1A1A1A] border border-[#2A2A2A]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <PriceTag price={service.price} />
                </div>
                <p className="mt-3 text-base md:text-lg text-[#C0C0C0]">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Specialty Services" subtitle="Advanced protection and specialty upgrades" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {specialtyServices.map((service) => (
              <Card key={service.name} className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <PriceTag price={service.price} />
                </div>
                <p className="mt-3 text-base md:text-lg text-[#6B6B6B]">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
