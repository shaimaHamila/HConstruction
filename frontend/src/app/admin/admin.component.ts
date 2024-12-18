import { Component } from '@angular/core';
import { Router,RouterLink,RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  isCollapsed = false;
}
