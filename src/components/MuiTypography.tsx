import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Hello Saad</Typography>
      <Typography variant="h2">Hello Saad</Typography>
      <Typography variant="h3">Hello Saad</Typography>
      <Typography variant="h4" component="h1" gutterBottom={true}>
        {" "}
        {/* Same Style for h4 but in h1 Component */}
        Hello Saad
      </Typography>
      <Typography variant="h5">Hello Saad</Typography>
      <Typography variant="h6">Hello Saad</Typography>

      <Typography variant="subtitle1">Hello Saad</Typography>
      <Typography variant="subtitle2">Hello Saad</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem atque
        itaque laboriosam officia temporibus facilis deserunt in, voluptatibus
        sapiente esse eaque ipsa harum modi tenetur dolorum architecto impedit
        expedita at.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
        nesciunt. Provident laboriosam ducimus architecto atque molestiae illo
        facere nam libero, voluptatum ea repellendus nisi ipsa quibusdam
        praesentium nobis minus saepe.
      </Typography>
    </div>
  );
};

export default MuiTypography;
