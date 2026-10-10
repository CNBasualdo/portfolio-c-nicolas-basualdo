import "../styles/logo.css";
import ImgIcon from "../media/icon/Logo.webp";

function Logo() {
    return (
        <div className="logo">
            <img
                src={ImgIcon}
                className="icon"
                alt="Logo CNB"
            />

            <span className="nombre">
                C. Nicolás Basualdo
            </span>
        </div>
    );
}

export default Logo;