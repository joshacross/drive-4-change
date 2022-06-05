import * as React from 'react';
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

export default function Notifications() {
  return (
    <React.Fragment>
      <Title>Total Points</Title>
      {rows[0].totalPoints}
    </React.Fragment>
  );
}