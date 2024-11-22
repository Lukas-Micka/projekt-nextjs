"use client";

import { signIn } from 'next-auth/react'; // Import the signIn function
import { Button, Typography, Container } from '@mui/material';

const Register = () => {
  const handleGoogleSignUp = () => {
    // Trigger Google sign-in for registration
    signIn('google', {
      callbackUrl: '/', // Redirect to homepage after successful registration
    });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        Register
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoogleSignUp}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
        }}
      >
        <img
          src="/google-icon.svg" // Add a Google icon for visual appeal
          alt="Google"
          style={{ width: '24px', height: '24px' }}
        />
        Register with Google
      </Button>
    </Container>
  );
};

export default Register;
