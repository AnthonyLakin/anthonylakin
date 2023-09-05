import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter, Route} from "@angular/router";
import { AppComponent} from "./app/app.component";
import { OoopsComponent} from "./app/ooops/ooops.component";
import {ErrorComponent} from "./app/error/error.component";
import {ConnectComponent} from "./app/connect/connect.component";
import {HomeComponent} from "./app/home/home.component";
import {ProjectsComponent} from "./app/projects/projects.component";
import {AboutmeComponent} from "./app/aboutme/aboutme.component";
import {MoreComponent} from "./app/more/more.component";
import {App1Component} from "./app/projects/cards/app1/app1.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {App2Component} from "./app/projects/cards/app2/app2.component";

export const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent, data: {animation: 'closed'},
  children: [
    {path: 'learn', component: App1Component, data: {animation: 'open'}},
    {path: 'accounting', component: App2Component, data: {animation: 'open'}}
  ]},
  { path: 'aboutme', component: OoopsComponent},
  { path: 'connect', component: OoopsComponent },
  { path: 'more', component: OoopsComponent },
  { path: '404', component: ErrorComponent },
  { path: 'home', redirectTo: ''},
  { path: '**', redirectTo: '/404'}
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()],
}).catch(err => console.error(err));


