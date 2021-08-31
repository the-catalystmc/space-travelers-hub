import React from 'react';

const Mission = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>
      <span className="not-member">NOT A MEMBER</span>
    </td>
    <td>
      <button type="button" className="join-mission">
        Join Mission
      </button>
    </td>
  </tr>
);

export default Mission;
