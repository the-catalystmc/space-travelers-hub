import React from 'react';

const Mission = ({ mission, joinMission }) => (
  <tr>
    <td>
      <h3>{mission.mission_name}</h3>
    </td>
    <td>{mission.description}</td>
    {mission.reserved && (
      <td>
        <span className="active-member">Active Member</span>
      </td>
    )}
    {!mission.reserved && (
      <td>
        <span className="not-member">NOT A MEMBER</span>
      </td>
    )}
    {mission.reserved && (
      <td>
        <button
          value={mission.mission_id}
          type="button"
          className="leave-mission"
          onClick={joinMission}
        >
          Leave Mission
        </button>
      </td>
    )}
    {!mission.reserved && (
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
    )}
  </tr>
);

export default Mission;
