import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
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
      <Grid container my={4}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
