import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {NavabarComponent} from "../navabar/navabar.component";
import {SidebarOwnerComponent} from "../sidebar-owner/sidebar-owner.component";

@Component({
  selector: 'app-applying',
  standalone: true,
    imports: [
        FooterComponent,
        NavabarComponent,
        SidebarOwnerComponent
    ],
  templateUrl: './applying.component.html',
  styleUrl: './applying.component.scss'
})
export class ApplyingComponent {

}
