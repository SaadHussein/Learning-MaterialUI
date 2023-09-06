import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          height: "300px",
          bgcolor: "secondary.light",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
