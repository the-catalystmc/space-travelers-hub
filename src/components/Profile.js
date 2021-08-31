import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const filteredMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  console.log(filteredRockets);

  return (
    <div className="profile-wrapper">
      <div className="my-missions">
        <h2>My Missions</h2>
        {filteredMissions.length !== 0 && (
          <ul>
            {filteredMissions.map((mission) => (
              <MyMissions key={mission.mission_id} mission={mission} />
            ))}
          </ul>
        )}
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        {filteredRockets.length !== 0 && (
          <ul>
            {filteredRockets.map((rocket) => (
              <MyRockets key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const MyMissions = ({ mission }) => <li>{mission.mission_name}</li>;
const MyRockets = ({ rocket }) => <li>{rocket.rocketName}</li>;

export default Profile;
