import { NavLink } from 'react-router-dom';
import '../scss/style.scss';
import logo from '../assets/planet.png';

const Navbar = () => (
  <div className="Nav-Container">
    <div className="Header-Logo">
      <NavLink exact to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <h1 className="Header-Title">Space Travelers Hub</h1>
    </div>
    <nav>
      <ul className="Nav-Items">
        <li className="Nav-Item">
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li className="Nav-Item">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li className="divider Nav-Item">
          <p>|</p>
        </li>
        <li className="Nav-Item">
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
