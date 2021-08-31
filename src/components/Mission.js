import React from 'react';

const Mission = ({ mission, joinMission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>
      <span className="not-member">NOT A MEMBER</span>
    </td>
    <td>
      <button
        value={mission.mission_id}
        type="button"
        className="join-mission"
        onClick={joinMission}
      >
        Join Mission
      </button>
    </td>
  </tr>
);

export default Mission;
