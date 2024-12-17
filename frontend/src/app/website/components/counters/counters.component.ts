import { Component } from '@angular/core';

interface Counter {
  count: number;
  title: string;
}

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent {
  counters: Counter[] = [
    { count: 598, title: 'PROJECTS' },
    { count: 128, title: 'CLIENTS' },
    { count: 339, title: 'SUCCESS' },
  ];

  companyTagline: string = '# BEST CONSTRUCTION Company';
  companyDescription: string =
    'We take pride in delivering exceptional construction projects on time and exceeding client expectations.';
}
