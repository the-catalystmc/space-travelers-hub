import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const { rocket } = props;

  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  const dispatch = useDispatch();

  const reserveUpdate = () => {
    dispatch(
      reserveRocket({
        id,
      }),
    );
  };

  const cancelReservation = () => {
    dispatch(
      cancelRocket({
        id,
      }),
    );
  };

  return (
    <div className="Rocket-Container">
      <img className="Rocket-Img" src={flickrImages} alt={rocketName} />
      <div className="Rocket-Info">
        <h3 className="Rocket-Title">{rocketName}</h3>
        <p className="Rocket-Text">{description}</p>
        <ReserveButton
          reserved={reserved}
          reserveRocket={reserveUpdate}
          cancelRocket={cancelReservation}
        />
      </div>
    </div>
  );
};

const ReserveButton = (props) => {
  const { reserved, reserveRocket, cancelRocket } = props;

  if (reserved) {
    return <button className="Rocket-Button-Cancel" type="button" onClick={cancelRocket}>Cancel Reservations</button>;
  }
  return <button className="Rocket-Button" type="button" onClick={reserveRocket}>Reserve Rocket</button>;
};

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
}.isRequired;

export default Rocket;
