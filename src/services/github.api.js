const GITHUB_USERNAME = "CNBasualdo";
const GITHUB_API_URL = "https://api.github.com";

export async function getRepositories() {
    const response = await fetch(
        `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    );

    if (!response.ok) {
        throw new Error("No se pudieron obtener los repositorios de GitHub");
    }

    const repositories = await response.json();

    return repositories.filter(
        (repository) => repository.name !== GITHUB_USERNAME,
    );
}

export async function getRepositoryReadme(repositoryName) {
    const response = await fetch(
        `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repositoryName}/readme`,
    );

    if (!response.ok) {
        throw new Error(`No se pudo obtener el README de ${repositoryName}`);
    }

    return response.json();
}

export async function getRepositoryLanguages(repositoryName) {
    const response = await fetch(
        `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repositoryName}/languages`,
    );

    if (!response.ok) {
        throw new Error(
            `No se pudieron obtener los lenguajes de ${repositoryName}`,
        );
    }

    return response.json();
}
