import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter, Route} from "@angular/router";

import { AppComponent} from "./app/app.component";
import {ErrorComponent} from "./app/error/error.component";
import {ConnectComponent} from "./app/connect/connect.component";
import {HomeComponent} from "./app/home/home.component";
import {ProjectsComponent} from "./app/projects/projects.component";
import {AboutmeComponent} from "./app/aboutme/aboutme.component";
import {MoreComponent} from "./app/more/more.component";

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  {path: 'home', redirectTo: ''},
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'more', component: MoreComponent },
  { path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));


