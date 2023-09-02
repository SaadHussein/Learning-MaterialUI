import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone."
          }
        />
        <TextField
          label="Password"
          type="password"
          disabled
          required
          helperText="Do not share your password with anyone."
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
