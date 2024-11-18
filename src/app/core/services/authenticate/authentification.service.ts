import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../allOthers/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  token!: string
  constructor(private localstore: LocalStorageServiceService) { }

  isAuhenticate():any{
    const connected = this.localstore.getItem('IsConnected');
    if (connected != null) {
      return true;
    } else {
      return false;
    }
  }

  getToken():string{
    const accesData = this.localstore.getItem('IsConnected');
    const token = accesData ?JSON.parse(accesData) : null;

    return token.access;
  }
}
