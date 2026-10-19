import "../styles/preloader.css";
import logo from "../media/icon/Logo.webp";

function Preloader({ exiting }) {
    return (
        <div className={`preloader ${exiting ? "preloader-exiting" : ""}`}>
            <div className='preloader-circle'>
                <img
                    src={logo}
                    alt='Logo de C. Nicolás Basualdo'
                    className='preloader-logo'
                />
            </div>
        </div>
    );
}

export default Preloader;
