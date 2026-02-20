import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  const fields = [
    { name: 'name', type: 'text', label: 'Your Name', required: true },
    { name: 'email', type: 'email', label: 'Email Address', required: true },
    { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
    { name: 'vehicle', type: 'text', label: 'Vehicle (Year, Make, Model)', required: true },
    {
      name: 'service',
      type: 'select',
      label: 'Service Interested In',
      options: ['Express Wash', 'Full Detail', 'Ceramic Coating', 'Paint Correction', 'Interior Detail', 'Other'],
      required: true,
    },
    { name: 'message', type: 'textarea', label: 'Additional Details', required: false },
  ];

  return (
    <main>
      <section className="min-h-[60vh]">
        <HeroImage
          title="Let's Get Started"
          subtitle="Book your appointment or get a custom quote for your vehicle"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Request a Quote" subtitle="Tell us about your vehicle and goals" />
          <div className="mt-10">
            <ContactForm fields={fields} submitLabel="Request Quote" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Other Ways to Reach Us" subtitle="We respond to all inquiries within 24 hours" />
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
            <Card className="p-6 bg-[#1A1A1A] border border-[#2A2A2A]">
              <div className="space-y-3 text-base md:text-lg text-[#C0C0C0]">
                <p className="font-semibold text-white">(555) 234-5678</p>
                <p>info@detailingbros.com</p>
                <p>4521 Motor City Drive, Suite 100, Austin, TX 78745</p>
                <div className="pt-4">
                  <p className="font-semibold text-white">Hours</p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-white">Social</p>
                  <p>Instagram: @detailingbros</p>
                  <p>Facebook: DetailingBrosATX</p>
                  <p>YouTube: DetailingBros</p>
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
