import { Component } from '@angular/core';
interface Offer {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  offers: Offer[] = [
    {
      icon: 'assets/others/icon-2/1.png',
      title: 'TOP RATED',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized.',
    },
    {
      icon: 'assets/others/icon-2/2.png',
      title: 'BEST QUALITY',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized.',
    },
    {
      icon: 'assets/others/icon-2/3.png',
      title: 'LOW COST',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized.',
    },
  ];
}
