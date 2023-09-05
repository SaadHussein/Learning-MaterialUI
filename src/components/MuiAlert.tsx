import React from "react";
import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle> This is an error Alert.
      </Alert>
      <Alert severity="warning" onClose={() => console.log("Closed")}>
        This is a warning Alert.
      </Alert>
      <Alert
        severity="info"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is an info Alert.
      </Alert>
      <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}>
        This is an success Alert.
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
