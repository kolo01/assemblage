import { Component } from '@angular/core';
import { Property } from '../../../interfaces/property';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-property.component.html',
  styleUrl: './details-property.component.scss'
})
export class DetailsPropertyComponent {
  visited = "https://my.matterport.com/show/?m=phCH7aCWGPR&play=1"

  property: Property[] = []
  id :number = 0
  slug :any = null
  constructor(private route: ActivatedRoute, private baseServices: BaseServicesService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.slug= params.get('slug');
      // console.log("slug",this.slug);
      this.id = parseInt(this.slug);
      this.baseServices.getOne(this.id,`properties`).subscribe((data) => {
        this.property = Object.values(data);
        console.log("this property ::::::",this.property)
      },
      (error) => {
        console.error('Error fetching properties:', error);
      });

    });




}
}
