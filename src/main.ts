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

export const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'projects', loadComponent: () => import('./app/projects/projects.component').then(c => c.ProjectsComponent) },
  // { path: 'aboutme', loadComponent: () => import('./app/aboutme/aboutme.component').then(c => c.AboutmeComponent) },
  // { path: 'connect', loadComponent: () => import('./app/connect/connect.component').then(c => ConnectComponent)  },
  // { path: 'more', loadComponent: () => import('./app/more/more.component').then(c => c.MoreComponent) },
  { path: 'aboutme', loadComponent: () => import('./app/ooops/ooops.component').then(c => c.OoopsComponent)},
  { path: 'connect', loadComponent: () => import('./app/ooops/ooops.component').then(c => c.OoopsComponent)  },
  { path: 'more', loadComponent: () => import('./app/ooops/ooops.component').then(c => c.OoopsComponent) },
  { path: '404', loadComponent: () => import('./app/error/error.component').then(c => c.ErrorComponent) },
  { path: 'home', redirectTo: ''},
  { path: '**', redirectTo: '/404'}
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));


