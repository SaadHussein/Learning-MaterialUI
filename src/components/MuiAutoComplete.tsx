import React, { useState } from "react";
import { Stack, TextField, Autocomplete } from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const Skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions: Skill[] = Skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={Skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
