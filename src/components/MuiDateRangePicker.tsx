import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  return (
    <Box width="500px">
      <DateRangePicker
        localeText={{ start: "Check-in", end: "Check-out" }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{ fieldSeparator: { children: "to" } }}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
