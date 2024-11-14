import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-sidebar-owner',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './sidebar-owner.component.html',
  styleUrl: './sidebar-owner.component.scss'
})
export class SidebarOwnerComponent {

}
