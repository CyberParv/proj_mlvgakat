'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">Something went wrong</h1>
        <p className="text-base md:text-lg text-[#6B6B6B]">
          We hit an unexpected issue while loading your page. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
