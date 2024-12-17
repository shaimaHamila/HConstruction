import { Component } from '@angular/core';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Define a type for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    mail?: string;
  };
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  // FontAwesome Icons
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faMail = faEnvelope;

  // Team Members Data
  teamMembers: TeamMember[] = [
    {
      name: 'STAWART SMITH',
      role: 'Chief Engineer',
      image: 'assets/team/1.jpg',
      socialLinks: {
        linkedin: '#',
        facebook: '#',
        mail: '#',
      },
    },
    {
      name: 'KALVIN MOMEN',
      role: 'Chief Designer',
      image: 'assets/team/2.jpg',
      socialLinks: {
        linkedin: '#',
        facebook: '#',
        mail: '#',
      },
    },
    {
      name: 'ANDREW SIMONS',
      role: 'Chief Electrician',
      image: 'assets/team/3.jpg',
      socialLinks: {
        linkedin: '#',
        facebook: '#',
        mail: '#',
      },
    },
  ];
}
