'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <div className="space-y-4">
        <button
          onClick={reset}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-4"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
