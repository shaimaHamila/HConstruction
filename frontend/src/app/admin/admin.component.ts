import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  isCollapsed = false;
  pageName: string = 'Dashboard'; // Default page name

  constructor(
    private router: Router,
    private message: NzMessageService,
  ) {}

  // You can change the page name dynamically based on the active route
  setPageName(page: string) {
    this.pageName = page;
  }

  // Handle logout
  logout(): void {
    // Clear any stored tokens or session data here
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Redirect to login page
    this.router.navigate(['/login']);
    this.message.success('Logged out successfully!');
  }
}
