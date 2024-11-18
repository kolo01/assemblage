import { Component } from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {SidebarOwnerComponent} from '../../sidebar-owner/sidebar-owner.component';
import {NavabarComponent} from '../../navabar/navabar.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-property',
  standalone: true,
  imports: [
    FooterComponent,
    SidebarOwnerComponent,
    NavabarComponent,
    RouterLink
  ],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.scss'
})
export class ListPropertyComponent {

}
