import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';

const Rocket = (props) => {
  const { rocket } = props;

  const {
    id, rocketName, description, flickrImages,
  } = rocket;

  return (
    <div id={id} className="Rocket-Container">
      <img className="Rocket-Img" src={flickrImages} alt={rocketName} />
      <div className="Rocket-Info">
        <h3 className="Rocket-Title">{rocketName}</h3>
        <p className="Rocket-Text">{description}</p>
        <button className="Rocket-Button" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
}.isRequired;

export default Rocket;
