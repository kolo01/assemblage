import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavabarComponent} from "../../navabar/navabar.component";
import {SidebarOwnerComponent} from "../../sidebar-owner/sidebar-owner.component";
import {Router, RouterLink} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Property} from '../../../../domains/interfaces/property';
import {BaseServicesService} from '../../../../core/services/baseServices/base-services.service';
import {environment} from '../../../../../environments/environment.development';

@Component({
  selector: 'app-add-property',
  standalone: true,
    imports: [
        FooterComponent,
        NavabarComponent,
        SidebarOwnerComponent,
        RouterLink
    ],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.scss'
})
export class AddPropertyComponent implements OnInit {
    propertyForm!: FormGroup;
    property:Property ={
      id: 0,
      label: "",
      price: 0,
      address: "",
      surface: 0,
      property_type: "",
      description: "",
      bedrooms_number: 0,
      bathrooms_number: 0,
      characteristics: [],
      images: [],
    }

    constructor(private baseService: BaseServicesService, router: Router ) { }

  ngOnInit(): void {
    this.propertyForm = new FormGroup({
      label: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      address: new FormControl('', Validators.required),
      surface: new FormControl(0, [Validators.required, Validators.min(0)]),
      property_type: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      bedrooms_number: new FormControl(0, [Validators.required, Validators.min(0)]),
      bathrooms_number: new FormControl(0, [Validators.required, Validators.min(0)]),
      characteristics: new FormControl([]),
      images: new FormControl([])
    });

  }
    submit() {
      if (this.propertyForm.valid) {
        console.log(this.propertyForm.value);
        const newProperty: Property = { ...this.propertyForm.value, id: 0 };
        this.baseService.post(environment.endPoint.properties.create, newProperty).subscribe({
        next:(response: any)=>{
          console.log('Propriété  créée avec succès:', response);
          this.propertyForm.reset();
        },
        error:(error:any)=>{
          console.error('Erreur lors de la création de la propriété : ', error);
        }
        });
      } else {
        console.warn('Formulaire invalide');
      }
    }

    isInvalid(field: AbstractControl) {
      return field.invalid && (field.touched || field.dirty);
    }
}
