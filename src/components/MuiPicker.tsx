import React, { useState } from "react";
import { Stack } from "@mui/material";
import {
  DatePicker,
  MobileDatePicker,
  DateTimePicker,
} from "@mui/x-date-pickers";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        slotProps={{ textField: {} }}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      <MobileDatePicker
        label="Time Picker"
        slotProps={{ textField: {} }}
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />
      <DateTimePicker
        label="Date Time Picker"
        slotProps={{ textField: {} }}
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};

export default MuiPicker;
