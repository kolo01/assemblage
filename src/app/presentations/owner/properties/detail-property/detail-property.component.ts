import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavabarComponent} from "../../navabar/navabar.component";
import {SidebarOwnerComponent} from "../../sidebar-owner/sidebar-owner.component";

@Component({
  selector: 'app-detail-property',
  standalone: true,
    imports: [
        FooterComponent,
        NavabarComponent,
        SidebarOwnerComponent
    ],
  templateUrl: './detail-property.component.html',
  styleUrl: './detail-property.component.scss'
})
export class DetailPropertyComponent {

}
