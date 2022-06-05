import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, notification, trip, monitorType, points) {
  return { id, date, notification, trip, monitorType, points };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Congrats! You Earned Points!',
    123,
    'gas consumption',
    444,
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Notifications() {
  return (
    <React.Fragment>
      <Title>Recent Notifications</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Notification</TableCell>
            <TableCell>Trip</TableCell>
            <TableCell>For</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.notification}</TableCell>
              <TableCell>Trip #{row.trip}</TableCell>
              <TableCell>{row.monitorType}</TableCell>
              <TableCell align="right">{`${row.points}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Notifications
      </Link>
    </React.Fragment>
  );
}