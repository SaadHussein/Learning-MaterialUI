import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltib = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={100}
      leaveDelay={100}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltib;
