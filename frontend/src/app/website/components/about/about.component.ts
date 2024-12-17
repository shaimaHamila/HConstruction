import { Component } from '@angular/core';

// Define a type for the About items
interface AboutItem {
  title: string;
  description: string;
  link: string;
  image: string;
  isActive?: boolean; // Optional property for active state
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // Array of About items with active state
  aboutItems: AboutItem[] = [
    {
      title: 'OUR STORY',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized On the other hand, we denounce with',
      link: 'about.html',
      image: 'assets/others/icon/1.png',
      isActive: false,
    },
    {
      title: 'ABOUT US',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized On the other hand, we denounce with',
      link: 'about.html',
      image: 'assets/others/icon/2.png',
      isActive: true, // Set this item as active
    },
    {
      title: 'OUR CERTIFICATE',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demoralized.',
      link: 'about.html',
      image: 'assets/others/icon/3.png',
      isActive: false,
    },
  ];
}
