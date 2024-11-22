"use client"; // Add this line

import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout'; // Import for logout icon
import Avatar from '@mui/material/Avatar'; // Import for avatar
import { useRouter } from 'next/navigation'; // Updated import
import { useSession, signOut } from 'next-auth/react'; // Import from next-auth

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession(); // Access session data

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        if (session) {
          router.push('/profil'); // Only navigate to "Profily" if the user is signed in
        }
        break;
      case 2:
        router.push('/prispevok');
        break;
      case 3:
        if (session) {
          signOut(); // Sign out the user
        } else {
          router.push('/auth/prihlasenie'); // Go to Sign In
        }
        break;
      case 4:
        if (!session) {
          router.push('/auth/registracia'); // Go to Register if not signed in
        }
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it's above other components
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />

      {/* Show "Profily" with Google profile picture if signed in */}
      {session && (
        <BottomNavigationAction
          label="Profily"
          icon={
            <Avatar 
              src={session.user?.image || '/default-profile.png'} // Use Google profile image or fallback
              alt="Profile"
              sx={{ width: 24, height: 24 }}
            />
          }
        />
      )}

      <BottomNavigationAction label="Prispevky" icon={<PostAddIcon />} />

      {/* Show Sign In or Sign Out based on session state */}
      {session ? (
        <BottomNavigationAction label="Odhlásenie" icon={<LogoutIcon />} />
      ) : (
        <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />
      )}

      {/* Show Register only if not signed in */}
      {!session && <BottomNavigationAction label="Registrácia" icon={<HowToRegIcon />} />}
    </BottomNavigation>
  );
}



