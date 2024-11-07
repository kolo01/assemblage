import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formInsc!: FormGroup;

  constructor(
    private router: Router,
    private baseService: BaseServicesService,
    private localeStore: LocalStorageServiceService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formInsc = new FormGroup({
      password: new FormControl(''),
      username: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone_number: new FormControl(''),
      cards_type: new FormControl(''),
      num_cni: new FormControl(''),
      user_type: new FormControl(''),
    });
  }

  handleSubmit(): void {
    console.log(this.formInsc.value);
    this.baseService.post('users', this.formInsc.value).subscribe(
      (res: any) => {
        console.log(res);
        this.localeStore.setItem('username', this.formInsc.value.username);
        this.router.navigate(['/otp_validator']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
