import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/gym.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "110px", height: "80px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#6D8B74",
          borderBottom: "3px solid #54BAB9",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#6D8B74" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
