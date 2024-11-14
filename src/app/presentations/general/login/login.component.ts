import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    FooterComponent,
    NavbarComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private baseName: BaseServicesService,
    private toastr: ToastrService,
    private localStore: LocalStorageServiceService,
    private route: Router
  ) {}

  ///variable

  visible2: boolean = false;
  visible3: boolean = false;
  visible: boolean = false;
  email = '';
  isConnected = false;
  resetMessage:string = '';

  ///Forms
  myForm!: FormGroup;
  resetFirstForm!: FormGroup;
  resetSecondForm!: FormGroup;
  forgetPass!: FormGroup;

  ///Fonctions

  sendData() {
    this.visible3 = false;
    this.resetMessage= "Mot de passe Modifié avec succés!";

  }

  showDialogModal3() {
    this.visible2 = false;
    this.visible3 = true;
  }

  showDialogModal2() {
    this.email = this.resetFirstForm.value.email;
    console.log(this.email);
    this.visible = false;
    this.visible2 = true;
  }

  showDialogModal() {
    this.visible = true;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl<string | null>('', Validators.required),
      password: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
    });

    // initialisation des forms groups
    this.forgetPass = new FormGroup({
      otp1: new FormControl('1', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp2: new FormControl('2', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp3: new FormControl('3', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
      otp4: new FormControl('4', [
        Validators.required,
        Validators.maxLength(1),
        Validators.minLength(1),
      ]),
    });

    this.resetFirstForm = new FormGroup({
      email: new FormControl<string | null>('', Validators.required),
    });

    this.resetSecondForm = new FormGroup({
      password: new FormControl<string | null>('', Validators.required),
      confirmPassword: new FormControl<string | null>('', Validators.required),
    });

    // Verifiaction de la connexion
    this.isConnected =
      this.localStore.getItem('IsConnected') != null ? true : false;

    if (this.isConnected) {
      this.route.navigate(['/profils']).then(
        (nav) => {
          console.log(nav); // true if navigation is successful
        },
        (err) => {
          console.log(err); // when there's an error
        }
      );
    }
  }

  onSubmit() {
    this.route.navigate(['/owner/home']);
    if (this.myForm.valid) {
      // Send a POST request
      this.baseName.post('login', this.myForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully!', response);
          this.localStore.setItem('IsConnected', response);
          // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bienvenue!!!' });
          if (response.userType === 'PROPRIETAIRE') {
            this.route.navigate(['/home']);
          } else {
            this.route.navigate(['/']);
          }
        },
        error: (error) => {
          console.error('Error submitting form!', error);
          // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Erreur lors de la connexion' });
        },
      });
    } else {
      console.log('Form is invalid!', this.myForm.errors);
    }
  }
}
