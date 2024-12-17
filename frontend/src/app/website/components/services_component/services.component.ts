import { Component } from '@angular/core';

// Define the type for a single service
interface ServiceItem {
  title: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  // Array of services
  services: ServiceItem[] = [
    {
      title: 'CONSTRUCTION',
      image: '/assets/service/1.jpg',
      link: 'single-service.html',
    },
    {
      title: 'RENOVATION',
      image: '/assets/service/2.jpg',
      link: 'single-service.html',
    },
    {
      title: 'ARCHITECTURE',
      image: '/assets/service/3.jpg',
      link: 'single-service.html',
    },
    {
      title: 'CONCRETE SUPPLY',
      image: '/assets/service/4.jpg',
      link: 'single-service.html',
    },
  ];
}
