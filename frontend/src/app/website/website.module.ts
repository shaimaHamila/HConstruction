import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './components/slider/slider.component';
import { WebsiteComponent } from './website.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CountersComponent } from './components/counters/counters.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsPageComponent,
    ProjectDetailsComponent,
    ContactComponent,
    SliderComponent,
    WebsiteComponent,
    HeaderComponent,
    OffersComponent,
    AboutComponent,
    ServicesComponent,
    CountersComponent,
    TeamComponent,
    FooterComponent,
    ProjectsComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, NzButtonModule],
  exports: [HomeComponent, WebsiteComponent],
})
export class WebsiteModule {}
