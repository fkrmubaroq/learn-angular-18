import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";


@Component({
  selector: 'layout-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() id: string = '';


  sidebarItems = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      path: '/auth/admin/dashboard'
    },
    {
      icon: 'users',
      label: 'Users',
      path: '/auth/admin/users'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      path: '/auth/admin/dashboardxx'
    },
  ];
}
