import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress variant="determinate" value={50} />
    </Stack>
  );
};

export default MuiProgress;
