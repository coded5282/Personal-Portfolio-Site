export class Project {
    projectId: String; 
    name: String;
    description: String;
    technologies: String;
    github: String;
    image: String;
    
    constructor (projectId: string, name: string, description: string, technologies: string, github: string, image: string) {
        this.projectId = projectId; 
        this.name = name;
        this.description = description;
        this.technologies = technologies;
        this.github = github;
        this.image = image; 
    }
}



