import { Component } from '@angular/core';
import { SidebarOwnerComponent } from "../sidebar-owner/sidebar-owner.component";

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [SidebarOwnerComponent],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent {

}
