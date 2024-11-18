import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.scss'
})
export class NavabarComponent {

}
