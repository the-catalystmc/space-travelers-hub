import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';
// import rock from '../assets/rock.jpg';

const Rocket = (props) => {
  const { rocket } = props;

  const {
    id, rocketName, description, flickrImages,
  } = rocket;

  return (
    <div id={id} className="Rocket-Container">
      <img className="Rocket-Img" src={flickrImages} alt={rocketName}/>
      <div className="Rocket-Info">
        <h3 className="Rocket-Title">{rocketName}</h3>
        <p className="Rocket-Text">{description}</p>
        <button className="Rocket-Button" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
