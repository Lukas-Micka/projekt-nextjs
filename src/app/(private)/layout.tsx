// src/app/(private)/layout.tsx
import Container from '@mui/material/Container';
import AuthGuard from '@/components/AuthGuard';

export const metadata = { title: 'Private | SnapZoska' };

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Container>
        {children}
      </Container>
    </AuthGuard>
  );
}