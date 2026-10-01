import "../styles/hero.css";
import ImgPrinc from "../media/Img/fotoCv.png";
import cv from "../media/archivos/CV-CNicolas-Basualdo.pdf"


function Hero() {
    return (
        <section id='inicio' className='hero-section'>
            <div className='hero-content'>
                <p className='hero-label'>JUNIOR SOFTWARE DEVELOPER</p>

                <h1>
                    <span className='hero-name'>C. Nicolás</span>

                    <span className='hero-lastname'>Basualdo</span>
                </h1>

                <p className='hero-description'>
                    Desarrollo aplicaciones web con React, JavaScript, Python y
                    Django, creando soluciones funcionales y enfocadas en una
                    buena experiencia de usuario.
                </p>

                <div className='hero-buttons'>
                    <a href='#proyectos' className='button primary-button'>
                        Ver proyectos
                    </a>
                    <a
                        href={cv}
                        download={"CV-CNicolas-Basualdo.pdf"}
                        className='button cv-button'
                    >
                        Descargar CV
                    </a>

                    <a href='#contacto' className='button secondary-button'>
                        Contactarme
                    </a>
                </div>

                <div className='hero-technologies'>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Django</span>
                    <span>Python</span>
                    <span>Docker</span>
                </div>

                <div className='hero-values'>
                    <span>IDEAS</span>
                    <span>/</span>
                    <span>CÓDIGO</span>
                    <span>/</span>
                    <span>SOLUCIONES</span>
                </div>
            </div>

            <div className='hero-image'>
                <div className='image-frame'>
                    <img
                        src={ImgPrinc}
                        alt='C. Nicolás Basualdo'
                        className='imgPrinc'
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
