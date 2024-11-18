import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-validator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp-validator.component.html',
  styleUrl: './otp-validator.component.scss',
})
export class OtpValidatorComponent {
  forgetPass!: FormGroup;
  username!: string|null;
  email!: string|null;

  constructor(
    private localeStore: LocalStorageServiceService,
    private baseService: BaseServicesService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username =
      this.localeStore.getItem('username') != null
        ? this.localeStore.getItem('username')
        : ' ';
    this.email =
      this.localeStore.getItem('email') != null
        ? this.localeStore.getItem('email')
        : ' ';

    this.forgetPass = new FormGroup({
      otp1: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp2: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp3: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp4: new FormControl('', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
    });
  }

  handleRegenerate(){
    // Regenerate OTP
    // This should be replaced with an API call
    this.baseService.post('otp/regenerate', {username: this.username?.replaceAll('"','')}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleSubmit() {
    console.log(this.forgetPass.value);
    console.log(`${this.forgetPass.value.otp1}${this.forgetPass.value.otp2}${this.forgetPass.value.otp3}${this.forgetPass.value.otp4}`);
    this.baseService.post('otp/verify', {username: this.username?.replaceAll('"',''),otp_code: parseInt(`${this.forgetPass.value.otp1}${this.forgetPass.value.otp2}${this.forgetPass.value.otp3}${this.forgetPass.value.otp4}`),}).subscribe(
      (res: any) => {
        console.log(res);
        this.localeStore.setItem("IsConnected", JSON.stringify(res))
        this.route.navigate(["/"])
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
