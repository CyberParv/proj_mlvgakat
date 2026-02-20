import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import GalleryImage from '@/components/GalleryImage';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  const services = [
    {
      name: 'Express Wash',
      price: '$49',
      duration: '1 Hour',
      description: 'Quick exterior wash, tire shine, and window cleaning',
      features: ['Hand wash', 'Wheel cleaning', 'Tire dressing', 'Window polish'],
      icon: 'droplet',
    },
    {
      name: 'Full Detail',
      price: '$199',
      duration: '4-5 Hours',
      description: 'Complete interior and exterior restoration',
      features: ['Clay bar treatment', 'Interior deep clean', 'Leather conditioning', 'Engine bay cleaning'],
      icon: 'sparkles',
      popular: true,
    },
    {
      name: 'Ceramic Pro',
      price: '$599',
      duration: '1-2 Days',
      description: 'Professional ceramic coating with 5-year protection',
      features: ['Paint correction', 'Ceramic coating', 'Interior protection', '5-year warranty'],
      icon: 'shield',
    },
  ];

  const features = [
    {
      title: 'Premium Products Only',
      description: 'We use exclusively professional-grade products from Gyeon, CarPro, and Chemical Guys',
      icon: 'badge-check',
    },
    {
      title: 'Certified Technicians',
      description: 'Our team is IDA certified with 10+ years combined experience in paint correction',
      icon: 'award',
    },
    {
      title: 'Satisfaction Guaranteed',
      description: "Not happy? We'll re-detail your vehicle free of charge. That's the Bros promise.",
      icon: 'thumbs-up',
    },
    {
      title: 'Mobile Service Available',
      description: "Can't come to us? We'll bring the full detailing experience to your home or office",
      icon: 'truck',
    },
    {
      title: 'Eco-Friendly Process',
      description: 'Water reclamation system and biodegradable products protect the environment',
      icon: 'leaf',
    },
    {
      title: 'Same-Day Booking',
      description: 'Need it done fast? We offer same-day appointments for express services',
      icon: 'clock',
    },
  ];

  const gallery = [
    { alt: 'Black BMW M4 ceramic coating finish', caption: '2023 BMW M4 - Ceramic Pro Package' },
    { alt: 'Red Ferrari interior detail', caption: 'Ferrari 488 - Full Leather Restoration' },
    { alt: 'White Porsche 911 paint correction', caption: 'Porsche 911 GT3 - 3-Stage Paint Correction' },
    { alt: 'Classic Mustang full restoration', caption: '1967 Mustang - Complete Restoration Detail' },
    { alt: 'Tesla Model S interior', caption: 'Tesla Model S - Interior Deep Clean' },
    { alt: 'Mercedes G-Wagon exterior detail', caption: 'G63 AMG - Full Exterior Detail' },
  ];

  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'BMW M4 Owner',
      quote:
        'These guys are absolute perfectionists. My M4 looks better than when I drove it off the lot. The ceramic coating has held up perfectly for 8 months now.',
      rating: 5,
      avatar: 'MT',
    },
    {
      name: 'Sarah Chen',
      role: 'Tesla Model Y Owner',
      quote:
        'Finally found a detailer who understands EVs! They were careful with all the electronics and the interior has never looked cleaner. Highly recommend!',
      rating: 5,
      avatar: 'SC',
    },
    {
      name: 'James Rodriguez',
      role: 'Classic Car Collector',
      quote:
        "Trusted them with my '69 Camaro and they treated it like a museum piece. The paint correction brought back the original shine. True craftsmen.",
      rating: 5,
      avatar: 'JR',
    },
    {
      name: 'Emily Watson',
      role: 'Porsche Cayenne Owner',
      quote:
        'The mobile service is a game-changer for busy professionals. They came to my office and my Cayenne was spotless by end of day.',
      rating: 5,
      avatar: 'EW',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Inspection',
      description:
        "We thoroughly assess your vehicle's condition, documenting every scratch, swirl, and imperfection",
    },
    {
      number: '02',
      title: 'Decontamination',
      description: 'Iron removal, clay bar treatment, and chemical decontamination prep the surface',
    },
    {
      number: '03',
      title: 'Correction',
      description: 'Multi-stage machine polishing removes defects and restores clarity to your paint',
    },
    {
      number: '04',
      title: 'Protection',
      description: 'Ceramic coating, sealant, or wax application locks in the finish for lasting protection',
    },
  ];

  return (
    <main>
      <section className="min-h-screen">
        <HeroImage
          title="Your Ride Deserves the Best"
          subtitle="Premium auto detailing services that bring out the showroom shine in every vehicle. From ceramic coatings to full interior restoration, the Bros have you covered."
          imageSrc="/images/hero.jpg"
          primaryCtaLabel="Book Your Detail"
          primaryCtaHref="/contact"
          secondaryCtaLabel="View Our Services"
          secondaryCtaHref="/services"
          badge="Trusted by 2,500+ Car Enthusiasts"
        />
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Detailing Packages" subtitle="Choose the perfect level of care for your vehicle" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Why the Bros?"
            subtitle="We're not just detailers—we're car enthusiasts who treat every vehicle like our own"
          />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Work Speaks for Itself" subtitle="Before & after transformations from our shop" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
            {gallery.map((image, index) => (
              <GalleryImage
                key={`${image.caption}-${index}`}
                imageSrc="/images/gallery.jpg"
                alt={image.alt}
                caption={image.caption}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="What Our Customers Say" subtitle="Join thousands of satisfied car owners" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Detailing Process" subtitle="A systematic approach to perfection" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Ready to Transform Your Ride?"
            subtitle="Book your appointment today and experience the Detailing Bros difference. First-time customers get 15% off any full detail package."
          />
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Button asChild>
              <a href="/contact">Schedule Now</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:5552345678">Call (555) 234-5678</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Visit Our Shop" subtitle="Stop by for a consultation or drop-off appointment" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-3 text-base md:text-lg">
                <p className="font-semibold">4521 Motor City Drive, Suite 100</p>
                <p>Austin, TX 78745</p>
                <p className="font-semibold">(555) 234-5678</p>
                <p>info@detailingbros.com</p>
                <div className="pt-4">
                  <p className="font-semibold">Hours</p>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <iframe
                title="Detailing Bros Map"
                src="https://maps.google.com/maps?q=4521%20Motor%20City%20Drive%20Austin%20TX%2078745&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
