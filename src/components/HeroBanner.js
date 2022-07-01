import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#54BAB9" fontWeight="600" fontSize="40px">
      VayaamSaala
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Make yourself stronger than your <br />
      excuses
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Your body hears everything that your mind says.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#54BAB9",
          padding: "24px",
          fontSize: "18px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Find Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#54bab9"
      sx={{
        opacity: "0.2",
        display: { lg: "block", xs: "none" },
        fontSize: "150px",
      }}
    >
      Fitness First
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
