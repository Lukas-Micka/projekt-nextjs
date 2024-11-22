// src/app/auth/prihlasenie/page.tsx

"use client"; // Add this line

import { signIn } from 'next-auth/react';
import { Button, Typography, Container } from '@mui/material';

const SignIn = () => {
  return (
    <Container>
      <Typography variant="h4">Sign In</Typography>
      <Button 
        variant="contained" 
        onClick={() => signIn('google')}
        sx={{ marginTop: '16px' }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
};

export default SignIn;