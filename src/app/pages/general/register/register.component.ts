import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  password: string = "";
    username: string = "";
    first_name: string = "";
    last_name: string = "";
    email: string = "";
    phone_number: string = "";
    cards_type: string = "";
    num_cni: string = "";
    user_type: string = "";



  onKey(event: any, type: string) {
    if (type === 'password') {
        this.password = event.target.value;

    } else if (type === 'username') {
        this.username = event.target.value;
    }
    else if (type === 'first_name') {
      this.first_name = event.target.value;
  }
  else if (type === 'last_name') {
    this.last_name = event.target.value;
}
else if (type === 'email') {
  this.email = event.target.value;
}
else if (type === 'phone_number') {
  this.phone_number = event.target.value;
}
else if (type === 'cards_type') {
  this.cards_type = event.target.value;
}
else if (type === 'num_cni') {
  this.num_cni = event.target.value;
}
 else if (type === 'user_type') {
        this.user_type = event.target.value;
    }
  }




  constructor(private router: Router, private baseService : BaseServicesService, private http: HttpClient) { }


  demo = () =>
  {
    alert('sdkh')
  }



  handleSubmit(data:any): void {
    console.log("debut")
    this.baseService.post("/users/",data).subscribe((res:any)=>{
      console.log(res);
     // this.router.navigate(['/otp_validator']);
    },
  (error:any) => {
    console.log(error);
  })




  }

}
