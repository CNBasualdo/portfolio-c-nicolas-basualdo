import { useEffect, useState } from "react";

import {
    getRepositories,
    getRepositoryReadme,
    getRepositoryLanguages,
} from "../services/github.api";

import {
    decodeReadme,
    extractReadmeData,
    getReadmeImageUrl,
} from "../utils/githubReadme";

import ProjectsCard from "./ProjectsCard";

import "../styles/projects.css";

function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRepositories = async () => {
            try {
                const repositories = await getRepositories();

                const repositoriesWithReadme = await Promise.all(
                    repositories.map(async (repository) => {
                        try {
                            const [readme, languages] = await Promise.all([
                                getRepositoryReadme(repository.name),
                                getRepositoryLanguages(repository.name),
                            ]);

                            const markdown = decodeReadme(readme.content);

                            const readmeData = extractReadmeData(markdown);

                            const imageUrl = getReadmeImageUrl(
                                readmeData.image,
                                repository,
                            );

                            const projectData = {
                                ...repository,
                                languages,
                                readme: {
                                    ...readmeData,
                                    image: imageUrl,
                                },
                            };

                            console.log(repository.name, projectData);

                            return projectData;
                        } catch {
                            return {
                                ...repository,

                                readme: null,
                            };
                        }
                    }),
                );

                console.log("Repositorios con README:", repositoriesWithReadme);

                setRepositories(repositoriesWithReadme);
            } catch (error) {
                console.error(error);

                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadRepositories();
    }, []);

    // --------------------------------
    // FILTRAR PROYECTOS
    // --------------------------------

    const visibleProjects = repositories.filter(
        (repository) => repository.readme?.image,
    );

    // --------------------------------
    // LOADING
    // --------------------------------

    if (loading) {
        return (
            <section id='proyectos' className='projects-section'>
                <h2>Proyectos</h2>

                <p>Cargando proyectos...</p>
            </section>
        );
    }

    // --------------------------------
    // ERROR
    // --------------------------------

    if (error) {
        return (
            <section id='proyectos' className='projects-section'>
                <h2>Proyectos</h2>

                <p>{error}</p>
            </section>
        );
    }

    // --------------------------------
    // CONTENIDO
    // --------------------------------

    return (
        <section id='proyectos' className='projects-section'>
            <div className='projects-header'>
                <p className='section-label'>PROYECTOS</p>

                <h2>
                    Proyectos en los que
                    <span> trabajo.</span>
                </h2>

                <p className='projects-description'>
                    Aplicaciones y proyectos desarrollados utilizando diferentes
                    tecnologías y herramientas.
                </p>
            </div>

            <div className='projects-list'>
                {visibleProjects.map((repository, index) => (
                    <ProjectsCard
                        key={repository.id}
                        project={repository}
                        number={String(index + 1).padStart(2, "0")}
                        reverse={index % 2 === 1}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
