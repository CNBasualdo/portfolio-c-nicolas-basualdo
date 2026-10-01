export function decodeReadme(content) {
    try {
        return decodeURIComponent(
            atob(content)
                .split("")
                .map(
                    (char) =>
                        `%${(
                            "00" +
                            char.charCodeAt(0).toString(16)
                        ).slice(-2)}`
                )
                .join("")
        );
    } catch (error) {
        console.error(
            "No se pudo decodificar el README:",
            error
        );

        return "";
    }
}


export function extractReadmeData(markdown) {
    const lines = markdown
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

    let title = "";
    let image = "";
    const description = [];

    for (const line of lines) {

        // --------------------------------
        // TÍTULO PRINCIPAL
        // --------------------------------

        if (!title && /^#\s+/.test(line)) {
            title = line
                .replace(/^#\s+/, "")
                .trim();

            continue;
        }


        // --------------------------------
        // IMAGEN MARKDOWN
        // --------------------------------

        if (!image) {
            const markdownImage = line.match(
                /!\[.*?\]\((.*?)\)/
            );

            if (markdownImage) {
                image = markdownImage[1];
                continue;
            }
        }


        // --------------------------------
        // IMAGEN HTML
        // --------------------------------

        if (!image) {
            const htmlImage = line.match(
                /<img[^>]+src=["']([^"']+)["']/i
            );

            if (htmlImage) {
                image = htmlImage[1];
                continue;
            }
        }


        // --------------------------------
        // IGNORAR HTML
        // --------------------------------

        if (
            line.startsWith("<p") ||
            line.startsWith("</p") ||
            line.startsWith("<div") ||
            line.startsWith("</div")
        ) {
            continue;
        }


        // --------------------------------
        // IGNORAR TÍTULOS SECUNDARIOS
        // --------------------------------

        if (/^#{2,}\s+/.test(line)) {
            continue;
        }


        // --------------------------------
        // IGNORAR IMÁGENES
        // --------------------------------

        if (
            /^!\[.*?\]\(.*?\)$/.test(line)
        ) {
            continue;
        }


        // --------------------------------
        // IGNORAR ENLACES
        // --------------------------------

        if (
            /^\[.*?\]\(https?:\/\/.*?\)$/.test(line)
        ) {
            continue;
        }


        // --------------------------------
        // DESCRIPCIÓN
        // --------------------------------

        if (description.length < 2) {
            description.push(line);
        }
    }


    return {
        title,
        image,
        description: description.join(" "),
    };
}


export function getReadmeImageUrl(
    imagePath,
    repository
) {
    if (!imagePath) {
        return null;
    }

    // Imagen externa
    if (
        imagePath.startsWith("http://") ||
        imagePath.startsWith("https://")
    ) {
        return imagePath;
    }

    // Limpiar ./ inicial
    const cleanPath = imagePath
        .replace(/^\.\/+/, "");

    const branch =
        repository.default_branch || "main";

    return `https://raw.githubusercontent.com/${repository.owner.login}/${repository.name}/${branch}/${cleanPath}`;
}