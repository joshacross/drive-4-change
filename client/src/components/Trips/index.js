import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, trip, distance, duration, points) {
  return { id, date, trip,  distance, duration, points };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    123,
    300,
    298,
    240,
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Trips() {
  return (
    <React.Fragment>
      <Title>Trips</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Trip</TableCell>
            <TableCell>distance</TableCell>
            <TableCell>duration</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>Trip #{row.trip}</TableCell>
              <TableCell>{row.distance} km</TableCell>
              <TableCell> {row.duration} minutes</TableCell>
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