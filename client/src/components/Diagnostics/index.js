import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, diagnosticType, quantity, units, trip, points) {
  return { id, date, diagnosticType,  quantity, units, trip, points };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'tire pressure',
    72,
    'psi',
    123,
    50,
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Diagnostics() {
  return (
    <React.Fragment>
      <Title>Diagnostics</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Diagnostic</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Trip</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.diagnosticType}</TableCell>
              <TableCell>{row.quantity} {row.units}</TableCell>
              <TableCell>Trip #{row.trip}</TableCell>
              <TableCell align="right">{`${row.points}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/diagnostics" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}