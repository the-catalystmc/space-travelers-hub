import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import "../scss/style.scss";
import Rocket from "./Rocket";

const Rockets = () => {
  const allRockets = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.loading);
  const dispatch = useDispatch();

  console.log(allRockets)

  useEffect(() => {
    if (rocketsStatus === false) {
      dispatch(fetchRockets());
    }
  }, [])

  const updateRockets = allRockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);

  return (
    <div>
      <ul className="Rockets-Container">{updateRockets}</ul>
    </div>
  )
}

export default Rockets;