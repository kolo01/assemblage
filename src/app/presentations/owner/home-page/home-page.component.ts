import { Component } from '@angular/core';
import { SidebarOwnerComponent } from "../sidebar-owner/sidebar-owner.component";
import {NavabarComponent} from "../navabar/navabar.component";
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarOwnerComponent, NavabarComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
