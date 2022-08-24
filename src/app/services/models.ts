export interface APIResponse<T> {
    data: Array<T>
}

export interface Project {
    id: string,
    attributes: {
        title: string,
        status: string,
        description: string,
        image: {
            data: {
                attributes: {
                    url: string
                }
            }
        },
        tech: {
            tech: Array<string>
        },
        links: {
            links: Array<Links>
        }
    }
}

export interface CleanProject {
    title: string,
    status: string,
    description: string,
    image: string,
    tech: Array<string>,
    links: Array<Links>,
    position: string
}

interface Links {
    name: string,
    url: string
}