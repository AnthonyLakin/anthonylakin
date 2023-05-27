import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConnectComponent } from './connect/connect.component';
import { MoreComponent } from './more/more.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'more', component: MoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
