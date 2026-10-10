import "../styles/sobreMi.css";
import AvatarDev from "../media/Img/avatarPrincipal.webp";

function SobreMi() {
    return (
        <section id='sobre-mi' className='about-section'>
            <div className='about-header'>
                <p className='section-label'>SOBRE MÍ</p>

                <h2>
                    Desarrollo, aprendizaje
                    <span> y evolución.</span>
                </h2>
            </div>

            <div className='about-content'>
                <div className='about-description'>
                    <p>
                        Soy Técnico Superior en
                        Desarrollo de Software, actualmente enfocado en el
                        desarrollo web.
                    </p>

                    <p>
                        Trabajo principalmente con React y Django,
                        complementando estos conocimientos con JavaScript,
                        Python, Docker y PostgreSQL para construir aplicaciones
                        funcionales y mantenibles.
                    </p>

                    <p>
                        Busco mi primera oportunidad profesional en IT, donde
                        pueda aplicar mis conocimientos, seguir creciendo como
                        desarrollador y aportar al equipo a través de proyectos
                        reales.
                    </p>
                </div>

                <div className='about-visual'>
                    <div className='avatar-wrapper'>
                        <img
                            src={AvatarDev}
                            alt='Ilustración de desarrollador de software'
                            className='about-avatar'
                        />
                    </div>
                </div>
            </div>

            <div className='about-info'>
                <article className='about-card'>
                    <span className='about-card-label'>FORMACIÓN</span>

                    <h3>Técnico Superior en Desarrollo de Software</h3>

                    <p>Instituto de Educación Superior Nº48</p>

                    <span className='about-card-year'>2022</span>
                </article>

                <article className='about-card'>
                    <span className='about-card-label'>ENFOQUE</span>

                    <h3>Desarrollo de aplicaciones web</h3>

                    <p>React · Django · Python · JavaScript</p>
                </article>
            </div>
        </section>
    );
}

export default SobreMi;
