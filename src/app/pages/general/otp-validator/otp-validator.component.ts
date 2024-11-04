import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-otp-validator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp-validator.component.html',
  styleUrl: './otp-validator.component.scss'
})
export class OtpValidatorComponent {
email: any;

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
