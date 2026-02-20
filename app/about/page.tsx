import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import TeamMember from '@/components/TeamMember';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const team = [
    {
      name: 'Mike Reyes',
      role: 'Co-Founder & Lead Detailer',
      bio: 'IDA Certified Detailer with 12 years experience. Specializes in paint correction and ceramic coatings.',
      avatar: 'MR',
    },
    {
      name: 'Danny Reyes',
      role: 'Co-Founder & Operations',
      bio: 'Manages day-to-day operations and customer experience. XPEL certified installer.',
      avatar: 'DR',
    },
    {
      name: 'Carlos Martinez',
      role: 'Senior Detailer',
      bio: '8 years in the industry. Expert in interior restoration and leather repair.',
      avatar: 'CM',
    },
    {
      name: 'Ashley Kim',
      role: 'Customer Experience',
      bio: "Your first point of contact. Handles scheduling, quotes, and making sure you're always happy.",
      avatar: 'AK',
    },
  ];

  const certifications = [
    'IDA Certified Detailers',
    'Gyeon Certified Installer',
    'XPEL Certified Installer',
    'CarPro Authorized Dealer',
    'Chemical Guys Pro Partner',
  ];

  return (
    <main>
      <section className="min-h-[60vh]">
        <HeroImage
          title="Meet the Bros"
          subtitle="Two brothers, one passion: making every car look its absolute best"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Story" subtitle="From driveway details to Austin's premium shop" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4 text-base md:text-lg text-[#6B6B6B]">
              <p>
                Detailing Bros started in 2018 when brothers Mike and Danny Reyes turned their weekend hobby into a
                full-time obsession. What began as detailing cars in their parents&apos; driveway has grown into Austin&apos;s
                most trusted detailing shop.
              </p>
              <p>
                We&apos;re not a franchise. We&apos;re not a quick-lube add-on. We&apos;re car guys who happen to run a business. Every
                vehicle that comes through our doors gets the same attention we&apos;d give our own rides.
              </p>
              <p>
                Today, we&apos;ve detailed over 2,500 vehicles—from daily drivers to million-dollar exotics. Our 4,000 sq ft
                climate-controlled facility features the latest equipment and a team of certified technicians who share
                our passion for perfection.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/about.jpg"
                alt="Brothers standing in front of shop with detailed vehicles"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="The Team" subtitle="Craftsmanship, care, and certified expertise" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Certifications & Partners" subtitle="Trusted by leading detailing brands" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <Card key={item} className="p-6 text-center font-semibold">
                {item}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
