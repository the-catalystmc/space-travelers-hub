import "../scss/style.scss";
import logo from "../assets/planet.png";

const Rocket = (props) => {
    return (
        <div className="Rocket-Container">
            <img className="Rocket-Img" src={logo} alt="Logo" />
            <div className="Rocket-Info">
                <h3 className="Rocket-Title">Falcon</h3>
                <p className="Rocket-Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!</p>
                <button className="Rocket-Button" type="button">Reserve Rocket</button>
            </div>
        </div>
    )
}

export default Rocket;