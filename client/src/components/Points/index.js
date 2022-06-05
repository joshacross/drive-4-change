import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, totalPoints) {
  return { id, totalPoints};
}

const rows = [
  createData(
    0,
    10500
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Notifications() {
  return (
    <React.Fragment>
      <Title>Total Points</Title>
      {rows[0].totalPoints}
    </React.Fragment>
  );
}