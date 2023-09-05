import React, { useState, useEffect } from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="Image"
          width={256}
          height={144}
        />
      )}
    </Box>
  );
};

export default MuiSkeleton;
