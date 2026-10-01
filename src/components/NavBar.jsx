import { useEffect, useState } from "react";
import Logo from "./Logo";
import "../styles/navbar.css";

const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "skills", label: "Skills" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
];

function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section.id);

                if (!element) continue;

                const sectionTop = element.offsetTop;
                const sectionHeight = element.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    const handleNavigation = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#inicio"
                    className="navbar-logo"
                    onClick={handleNavigation}
                >
                    <Logo />
                </a>

                <nav
                    className={`navbar-links ${
                        menuOpen ? "open" : ""
                    }`}
                >
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={
                                activeSection === section.id
                                    ? "active"
                                    : ""
                            }
                            onClick={handleNavigation}
                        >
                            {section.label}
                        </a>
                    ))}
                </nav>

                <div className="navbar-actions">

                    <button
                        type="button"
                        className="theme-button"
                        aria-label={
                            darkMode
                                ? "Activar modo claro"
                                : "Activar modo oscuro"
                        }
                        onClick={() =>
                            setDarkMode((current) => !current)
                        }
                    >
                        {darkMode ? "☀" : "☾"}
                    </button>

                    <button
                        type="button"
                        className={`menu-button ${
                            menuOpen ? "open" : ""
                        }`}
                        aria-label={
                            menuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={menuOpen}
                        onClick={() =>
                            setMenuOpen((current) => !current)
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </div>
        </header>
    );
}

export default NavBar;