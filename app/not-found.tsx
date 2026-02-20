import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Page Not Found</h1>
        <p className="text-base md:text-lg text-[#6B6B6B]">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the home page to explore our detailing services.
        </p>
        <Button asChild>
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
}
