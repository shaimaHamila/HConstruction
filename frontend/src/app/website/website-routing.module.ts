import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '', // This will be the default route for the WebsiteModule
    component: WebsiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to home if no path is provided
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
