import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo1 from '../assets/images/fb-logo.png';
import Logo2 from "../assets/images/insta-logo.png";
import { Margin } from '@mui/icons-material';

const Footer = () => (
  <Box mt="80px" bgcolor="#D3EBCD">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    ></Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by Sunny Kumar || Find me on
      <a
        href="https://www.facebook.com/profile.php?id=100039702106003"
        target="_blank"
      >
        <img
          src={Logo1}
          alt="logo"
          style={{ width: "40px", height: "40px", margin: "-10px 10px" }}
        />
      </a>
      <a href="https://www.instagram.com/_sunny_k_22/" target="_blank">
        <img
          src={Logo2}
          alt="logo"
          style={{ width: "40px", height: "40px", margin: "-10px 10px" }}
        />
      </a>
    </Typography>
  </Box>
);

export default Footer;
