import {
    FaReact,
    FaJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
} from "react-icons/fa";

import { SiDjango, SiPostgresql, SiBootstrap } from "react-icons/si";

import "../styles/projectscard.css";

const technologyIcons = {
    JavaScript: <FaJs />,
    Python: <FaPython />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Dockerfile: <FaDocker />,
    Docker: <FaDocker />,
    Git: <FaGitAlt />,
    React: <FaReact />,
    Django: <SiDjango />,
    PostgreSQL: <SiPostgresql />,
    Bootstrap: <SiBootstrap />,
};

function ProjectCard({ project, number, reverse }) {
    const { name, html_url, readme, languages = {} } = project;

    const technologies = Object.keys(languages);

    return (
        <article
            className={`project-card ${reverse ? "project-card-reverse" : ""}`}
        >
            <div className='project-image'>
                {readme?.image && (
                    <img
                        src={readme.image}
                        alt={`Portada de ${readme.title || name}`}
                    />
                )}
            </div>

            <div className='project-content'>
                <span className='project-number'>{number}</span>

                <h3 className='project-title'>{readme?.title || name}</h3>

                <p className='project-description'>
                    {readme?.description ||
                        project.description ||
                        "Sin descripción disponible."}
                </p>

                {technologies.length > 0 && (
                    <div className='project-technologies'>
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className='project-technology'
                                title={technology}
                            >
                                {technologyIcons[technology] || null}
                                <span>{technology}</span>
                            </span>
                        ))}
                    </div>
                )}

                <div className='project-actions'>
                    <a
                        href={html_url}
                        target='_blank'
                        rel='noreferrer'
                        className='project-button'
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
