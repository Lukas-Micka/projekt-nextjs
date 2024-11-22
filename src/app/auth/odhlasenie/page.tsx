// src/app/auth/odhlasenie/page.tsx

"use client"; // Add this line

import { signOut } from 'next-auth/react';
import { Button, Typography, Container } from '@mui/material';

const SignOut = () => {
  return (
    <Container>
      <Typography variant="h4">Sign Out</Typography>
      <Button 
        variant="contained" 
        onClick={() => signOut()}
        sx={{ marginTop: '16px' }}
      >
        Sign out
      </Button>
    </Container>
  );
};

export default SignOut;
