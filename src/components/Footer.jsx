import Logo from "./Logo";
import "../styles/footer.css";

const footerLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "skills", label: "Skills" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
];

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <a href='#inicio' className='footer-logo'>
                        <Logo />
                    </a>

                    <nav className='footer-nav'>
                        {footerLinks.map((link) => (
                            <a key={link.id} href={`#${link.id}`}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className='footer-socials'>
                        <a
                            href='https://github.com/CNBasualdo'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='GitHub'
                        >
                            GitHub
                        </a>

                        <a
                            href='https://www.linkedin.com/in/carlosnbasualdo233/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'
                        >
                            LinkedIn
                        </a>

                        <a
                            href='mailto:basualdocarlos691@gmail.com'
                            aria-label='Email'
                        >
                            Email
                        </a>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p>
                        © {new Date().getFullYear()} C. Nicolás Basualdo. Todos
                        los derechos reservados.
                    </p>

                    <a href='#inicio' className='footer-back-top'>
                        Volver arriba ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
