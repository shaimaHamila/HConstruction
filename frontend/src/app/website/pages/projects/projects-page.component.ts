import { Component } from '@angular/core';
interface Project {
  id: number;
  imageUrl: string;
  title: string;
  duration: string;
  link: string;
}
@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  // Array of projects
  projects: Project[] = [
    {
      id: 1,
      imageUrl: 'assets/lst-project-3/2.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 2,
      imageUrl: 'assets/lst-project-3/2.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 3,
      imageUrl: 'assets/lst-project-3/3.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 4,
      imageUrl: 'assets/lst-project-3/4.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 5,
      imageUrl: 'assets/lst-project-3/5.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 6,
      imageUrl: 'assets/lst-project-3/5.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 7,
      imageUrl: 'assets/lst-project-3/5.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 8,
      imageUrl: 'assets/lst-project-3/5.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
    {
      id: 9,
      imageUrl: 'assets/lst-project-3/5.jpg',
      title: 'CONSTRUCTION',
      duration: '6 MONTH',
      link: 'single-project.html',
    },
  ];
}
