import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavabarComponent} from "../../navabar/navabar.component";
import {RouterLink} from "@angular/router";
import {SidebarOwnerComponent} from "../../sidebar-owner/sidebar-owner.component";

@Component({
  selector: 'app-update-property',
  standalone: true,
    imports: [
        FooterComponent,
        NavabarComponent,
        RouterLink,
        SidebarOwnerComponent
    ],
  templateUrl: './update-property.component.html',
  styleUrl: './update-property.component.scss'
})
export class UpdatePropertyComponent {

}
