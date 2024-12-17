import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WebsiteComponent } from './website/website.component';

const routes: Routes = [
  // Default route, redirects to the website module
  { path: '', pathMatch: 'full', redirectTo: 'website' },
  { path: 'admin', component: AdminComponent },
  { path: 'website', component: WebsiteComponent },
  // Lazy load WebsiteModule
  {
    path: 'website',
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
