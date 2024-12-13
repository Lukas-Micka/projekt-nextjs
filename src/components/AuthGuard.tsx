// components/AuthGuard.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/registracia'); // Adjust this path to match your sign-in page
    }
  }, [status, router]);

  if (status === 'loading') {
    // Optional: Render a loading spinner or placeholder while session is being loaded
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return null; // Default fallback (unlikely to be reached)
};

export default AuthGuard;