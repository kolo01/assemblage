import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, ButtonModule,ForgetPasswordComponent,DialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private baseName: BaseServicesService,private fb: FormBuilder, private localStore: LocalStorageServiceService, private route: Router){

  }

///Modal  parameter

visible: boolean = false;
myForm!: FormGroup;
email= "";
isConnected = false


showDialog() {
        this.visible = true;
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.myForm = new FormGroup({
        username : new FormControl<string | null>("",Validators.required),
        password: new FormControl<string | null>('', [Validators.required,Validators.maxLength(30), Validators.minLength(5)])
      })

     this.isConnected = this.localStore.getItem("IsConnected") != null ? true : false;


     if (this.isConnected){
      this.route.navigate(["/"])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });;
     }
    }














  onSubmit() {

    if (this.myForm.valid) {
      // Send a POST request
      this.baseName.post('login', this.myForm.value)
        .subscribe({
          next: response => {
            console.log('Form submitted successfully!', response);
            this.localStore.setItem("IsConnected", response)
            this.route.navigate(["/"])
          },
          error: error => {
            console.error('Error submitting form!', error);
          }
        });
    } else {
      console.log('Form is invalid!', this.myForm.errors);
    }
  }








}
