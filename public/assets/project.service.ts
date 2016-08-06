// import {Injectable} from "angular2/core";
// import {Http, Headers} from "angular2/http";
// // import {User} from "./user"; 
// import {Observable} from "rxjs/Observable";
// import {Project} from "../models/project.js"; 
import {Project} from "./project"; 
import {Observable} from "rxjs/Observable"; 
import {Injectable, EventEmitter} from "@angular/core"; 
import {Http, Headers} from "@angular/http"; 
import 'rxjs/Rx'; 

@Injectable()
export class ProjectService {
    projects: Project[] = [];
    projectIsEdit = new EventEmitter<Project>(); 
    
    constructor (private _http: Http) {}
    
    getAllProjects() {
        return this._http.get('https://webdevmean-coded5282.c9users.io/projects')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let project = new Project(data[i].projectId, data[i].name, data[i].description, data[i].technologies, data[i].github, data[i].image);
                    objs.push(project);
                };
                return objs; 
            })
            .catch(error => Observable.throw(error.json())); 
    }  
    
    createProject(project: Project) {
        const body = JSON.stringify(project);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('https://webdevmean-coded5282.c9users.io/projects', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let project = new Project(data.projectId, data.name, data.description, data.technologies, data.github, data.image);
                return project;
            })
            .catch(error => Observable.throw(error.json())); 
    }
    
    getProject() {
        
    }
    
    updateProject() {
        
    }
    
    deleteProject(project: Project) {
        this.projects.splice(this.projects.indexOf(project), 1);
        return this._http.delete('https://webdevmean-coded5282.c9users.io/project/' + project.projectId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    
//     updateMessage(message: Message) {
//         const body = JSON.stringify(message); 
//         const headers = new Headers({'Content-Type': 'application/json'});
//         const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
//         return this._http.patch('https://webdevmean-coded5282.c9users.io/message/' + message.messageId + token, body, {headers: headers})
//             .map(response => response.json())
//             .catch(error => Observable.throw(error.json()));     
//     }
    
//     editMessage(message: Message) {
//         this.messageIsEdit.emit(message); 
//         // this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy'); 
//     }
}