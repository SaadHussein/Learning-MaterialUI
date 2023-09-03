import React from "react";
import { Box, Stack, Divider } from "@mui/material";
const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing="16px"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100px",
          height: "100px",
          color: "white",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      ></Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="red"
        p="16px"
      ></Box>
    </Stack>
  );
};

export default MuiLayout;
