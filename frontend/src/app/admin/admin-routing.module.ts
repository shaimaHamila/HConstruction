import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProjetManagmentComponent } from './pages/projet-managment/projet-managment.component';
import { ContactComponent } from './pages/contact/contact.component';
const routes: Routes = [
  {
    path: '', // You need to reference the 'admin' path explicitly here
    component: AdminComponent,
    children: [
      { path: 'project-management', component: ProjetManagmentComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'project-management', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
