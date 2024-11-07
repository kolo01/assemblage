import { Component } from '@angular/core';
import { Property } from '../../../domains/interfaces/property';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-properties.component.html',
  styleUrl: './all-properties.component.scss',
})
export class AllPropertiesComponent {
  property: Property[] = [];

  constructor(private baseServices: BaseServicesService) {}

  ngOnInit(): void {
    this.baseServices.getAll(`properties/`).subscribe(
      (data) => {
        this.property = data;
        console.log('all product ::::::', this.property);
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}
