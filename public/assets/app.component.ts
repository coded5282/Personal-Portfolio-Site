import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router"; 
import {ProjectsComponent} from "./projects.component"; 
// import {MessagesComponent} from "./messages/messages.component";
// import {AuthenticationComponent} from "./auth/authentication.component"; 
// import {HeaderComponent} from "./header.component"; 
// import {ErrorComponent} from "./errors/error.component"; 

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <p>HELLO THIS IS ANGULAR</p>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES] 
})
@Routes([
    {path: '/', component: ProjectsComponent}
])

export class AppComponent {
   
}