import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        select
        label="Select Country"
        value={country}
        onChange={handleChangeCountry}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="EG">Egypt</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
