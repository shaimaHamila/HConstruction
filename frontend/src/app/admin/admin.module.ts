import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { ProjetManagmentComponent } from './pages/projet-managment/projet-managment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminRoutingModule } from './admin-routing.module';
import { Router,RouterLink,RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer'; // Import NzDrawerModule
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzFormModule } from 'ng-zorro-antd/form';  




import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AdminComponent, ProjetManagmentComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    AdminRoutingModule,
    RouterLink,RouterModule,
    NzTableModule,
    NzDividerModule, 
    NzDrawerModule, 
    NzGridModule,
    NzInputModule,
    NzCardModule,
    NzFormModule, 
    BrowserModule,
  ],
  exports: [AdminComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
})
export class AdminModule {
  constructor (private router : Router){}
}
