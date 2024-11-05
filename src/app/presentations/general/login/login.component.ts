import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, FormsModule,ReactiveFormsModule, ButtonModule,ForgetPasswordComponent,DialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private baseName: BaseServicesService,private fb: FormBuilder, private http: HttpClient, private localStore: LocalStorageServiceService){
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

///Modal  parameter
email : string = "";
visible: boolean = false;

showDialog() {
        this.visible = true;
    }











  myForm: FormGroup;
  isConnected = false;
  token: string = ""




  onSubmit() {
    // alert("helo")
    console.log("hello world")
    if (this.myForm.valid) {
      // Send a POST request
      this.http.post('http://127.0.0.1:8000/api/users/', this.myForm.value)
        .subscribe({
          next: response => {
            console.log('Form submitted successfully!', response);
          },
          error: error => {
            console.error('Error submitting form!', error);
          }
        });
    } else {
      console.log('Form is invalid!');
    }
  }



  loginRequest(data:any){
    alert("hello");
    this.baseName.post('users/',data).subscribe((res:any)=>{
      console.log("data",res)
    },
    (error)=>{
      console.log("error",error)
    }
  )
  }

password = ""


  onKey(event: any, type: string) {
    if (type === 'password') {
        this.password = event.target.value;

    }
  }

}
