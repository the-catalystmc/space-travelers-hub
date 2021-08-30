import React from 'react';

const Mission = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>NOT A MEMBER</td>
    <td>Join Mission</td>
  </tr>
);

export default Mission;
