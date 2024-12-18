import { Component, HostListener } from '@angular/core';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faPhone = faPhone;
  faBars = faBars;
  scroll = 0;
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Directly use window.scrollY for better accuracy
    this.scroll = window.scrollY;
    console.log('Current scroll position:', this.scroll); // Debugging the scroll value
  }

  scrollToContact() {
    // Scroll to the contact form section
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
