"use client";

import React from "react";
import { BottomNavigation, BottomNavigationAction, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (session) {
      // Signed-in user navigation
      switch (newValue) {
        case 0:
          router.push("/"); // Home
          break;
        case 1:
          router.push("/hladanie"); // Search
          break;
        case 2:
          router.push("/prispevok"); // Add Post
          break;
        case 3:
          router.push("/profil"); // Profile
          break;
        case 4:
          router.push("/auth/odhlasenie"); // Sign Out
          break;
        default:
          break;
      }
    } else {
      // Signed-out user navigation
      switch (newValue) {
        case 0:
          router.push("/"); // Home
          break;
        case 1:
          router.push("/o-mne"); // About Me
          break;
        case 2:
          router.push("/auth/registracia"); // Sign Up
          break;
        case 3:
          router.push("/auth/prihlasenie"); // Sign In
          break;
        default:
          break;
      }
    }
  };

  const navigationActions = session
    ? [
        <BottomNavigationAction key="home" label="Domov" icon={<HomeIcon />} />,
        <BottomNavigationAction key="search" label="Hľadať" icon={<SearchIcon />} />,
        <BottomNavigationAction key="add" label="Pridať" icon={<AddCircleIcon />} />,
        <BottomNavigationAction
          key="profile"
          label="Profil"
          icon={
            <Avatar
              alt={session.user?.name || "User"}
              src={session.user?.image || ""}
              sx={{ width: 24, height: 24 }}
            />
          }
        />,
        <BottomNavigationAction key="logout" label="Odhlásiť" icon={<ExitToAppIcon />} />,
      ]
    : [
        <BottomNavigationAction key="home" label="Domov" icon={<HomeIcon />} />,
        <BottomNavigationAction key="about" label="O Mne" icon={<InfoIcon />} />,
        <BottomNavigationAction key="signup" label="Registrácia" icon={<ExitToAppIcon />} />,
        <BottomNavigationAction key="signin" label="Prihlásenie" icon={<ExitToAppIcon />} />,
      ];

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      sx={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      {navigationActions}
    </BottomNavigation>
  );
};

export default NavBar;