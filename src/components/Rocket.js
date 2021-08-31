import "../scss/style.scss";
import rock from '../assets/rock.jpg'
const Rocket = (props) => {
    const { rocket } = props;

    const {
        id, rocket_name, description, flikr_images,
    } = rocket;

    return (
        <div id={id} className="Rocket-Container">
            <img className="Rocket-Img" src="https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg" />
            <div className="Rocket-Info">
                <h3 className="Rocket-Title">{rocket_name}</h3>
                <p className="Rocket-Text">{description}</p>
                <button className="Rocket-Button" type="button">Reserve Rocket</button>
            </div>
        </div>
    )
}

export default Rocket;