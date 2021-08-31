import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { changeStatus } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const joinMission = (event) => {
    dispatch(changeStatus(event.target.value));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission={mission}
              joinMission={joinMission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
