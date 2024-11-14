import { Component } from '@angular/core';
import { environmentDev } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { Property } from '../../../domains/interfaces/property';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FooterComponent } from "../footer/footer.component";




@Component({
  selector: 'app-landing-page2',
  standalone: true,
  imports: [CommonModule, AutoCompleteModule, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  properties : Property[] = []
  constructor(  private baseService: BaseServicesService) {

  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.baseService.getAll("properties/").subscribe( (data) => {
    this.properties = data;
    this.properties = this.properties.reverse().slice(0,6)
    console.log(this.properties)
  },
  (error) => {
    console.error('Error fetching properties:', error);
  });
}

saveTolocalstorage(data:any): void {
  localStorage.setItem('property', JSON.stringify(data));

}


items: any[] | undefined;

value: any;

search(event: AutoCompleteCompleteEvent) {
    this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
}

}
