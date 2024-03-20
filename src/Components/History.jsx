import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows, withdraw } from "../Sdata";
import { Typography, Box } from "@mui/material";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

function History() {
  return (
    <div className="charts">
      <Typography variant="h4" my={2}>
        Deoposite Records
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: "1400px", marginBottom: "60px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>USER NAME</TableCell>
              <TableCell align="right">AMOUNT </TableCell>
              <TableCell align="right"> SOURCE </TableCell>
              <TableCell align="right">DEOPOSITE AMOUNT</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textTransform: "capitalize" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.dba}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" my={2}>
        Withdraws Records
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: "1400px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>USER NAME</TableCell>
              <TableCell align="right">AMOUNT </TableCell>
              <TableCell align="right"> SOURCE </TableCell>
              <TableCell align="right">DEOPOSITE AMOUNT</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdraw.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textTransform: "capitalize" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.dba}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" my={2}>
        Commession History
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: "1400px" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>USER NAME</TableCell>
              <TableCell align="right">AMOUNT </TableCell>
              <TableCell align="right"> SOURCE </TableCell>
              <TableCell align="right">DEOPOSITE AMOUNT</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdraw.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textTransform: "capitalize" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.dba}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default History;
