///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {ProjectsComponent} from "./projects.component"; 
// import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "@angular/router"; 
import {provide} from "@angular/core"; 
import {HTTP_PROVIDERS} from "@angular/http"; 
// import {AuthService} from "./auth/auth.service"; 
// import {ErrorService} from "./errors/error.service"; 

bootstrap(AppComponent, [MessageService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);