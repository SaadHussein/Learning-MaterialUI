import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Kelsi",
    last_name: "Haggeth",
    email: "khaggeth0@hc360.com",
    gender: "Female",
    ip_address: "162.79.132.1",
  },
  {
    id: 2,
    first_name: "Zacharia",
    last_name: "Tomczykowski",
    email: "ztomczykowski1@princeton.edu",
    gender: "Male",
    ip_address: "156.218.204.255",
  },
  {
    id: 3,
    first_name: "Tye",
    last_name: "Shutte",
    email: "tshutte2@washington.edu",
    gender: "Male",
    ip_address: "137.190.45.216",
  },
  {
    id: 4,
    first_name: "Benedict",
    last_name: "Klaaasen",
    email: "bklaaasen3@newsvine.com",
    gender: "Male",
    ip_address: "54.83.227.104",
  },
  {
    id: 5,
    first_name: "Saxon",
    last_name: "Funcheon",
    email: "sfuncheon4@multiply.com",
    gender: "Male",
    ip_address: "35.37.161.13",
  },
  {
    id: 6,
    first_name: "Roscoe",
    last_name: "Paolini",
    email: "rpaolini5@ted.com",
    gender: "Genderfluid",
    ip_address: "92.47.156.50",
  },
  {
    id: 7,
    first_name: "Babbie",
    last_name: "Lissaman",
    email: "blissaman6@google.com",
    gender: "Female",
    ip_address: "161.117.65.225",
  },
  {
    id: 8,
    first_name: "Claudio",
    last_name: "Chawner",
    email: "cchawner7@ocn.ne.jp",
    gender: "Male",
    ip_address: "57.145.254.140",
  },
  {
    id: 9,
    first_name: "Mitchael",
    last_name: "Strauss",
    email: "mstrauss8@tripod.com",
    gender: "Male",
    ip_address: "204.69.147.154",
  },
  {
    id: 10,
    first_name: "Javier",
    last_name: "Norster",
    email: "jnorster9@rediff.com",
    gender: "Male",
    ip_address: "248.141.162.123",
  },
];

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="Simple Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
