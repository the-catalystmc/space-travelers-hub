import {
  Link,
} from 'react-router-dom';
import '../scss/style.scss';
import logo from '../assets/planet.png'

const Navbar = () => {
  return (<div className="Nav-Container">
    <div className="Header-Logo">
      <Link><img src={logo} alt="Logo" /></Link>
      <h1 className="Header-Title">Space Travelers Hub</h1>
    </div>
    <nav>
      <ul className="Nav-Items">
        <li className="Nav-Item"><Link to="rockets">Rockets</Link></li>
        <li className="Nav-Item"><Link to="mission">Missions</Link></li>
        <li className="Nav-Item"><Link to="profile">My Profile</Link></li>
      </ul>
    </nav>
  </div>);
};

export default Navbar;
