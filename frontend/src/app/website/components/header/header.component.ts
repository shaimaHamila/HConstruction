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
    this.scroll =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
  }
}
