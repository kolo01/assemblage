import { Component } from '@angular/core';
import { environmentDev } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BaseServicesService } from '../../../core/services/baseServices/base-services.service';
import { Property } from '../../../domains/interfaces/property';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { LocalStorageServiceService } from '../../../core/services/allOthers/local-storage-service.service';
import { AuthentificationService } from '../../../core/services/authenticate/authentification.service';





@Component({
  selector: 'app-landing-page2',
  standalone: true,
  imports: [CommonModule, AutoCompleteModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  properties : Property[] = []
  token: any
  isConnected : boolean = false
  constructor(  private baseService: BaseServicesService, private localStore: LocalStorageServiceService, private isAuthenticate: AuthentificationService) {

  }

ngOnInit(): void {

  this.isConnected= this.localStore.getItem('IsConnected') != null ? true : false;
  if (this.isConnected) {

    this.token = this.localStore.getItem('IsConnected');
    // this.token= JSON.parse(this.localStore.getItem('IsConnected'));
    this.token = this.isConnected ? JSON.parse(this.token) : null;

    console.log("token: " + this.token);
  }
  this.baseService.getAll("properties").subscribe( (data) => {
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



logout():void{
  localStorage.removeItem('IsConnected');
}


testing():void{
  console.log(this.isAuthenticate.isAuhenticate());
  console.log(this.isAuthenticate.getToken());
}

}
