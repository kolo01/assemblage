import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

/// service pour bypasser la restriction de localstorage, en attendant d'avoir une autre solution



  private isLocalStorageAvailable: boolean;

  constructor() {
    this.isLocalStorageAvailable = this.checkLocalStorageAvailability();
  }

  // Vérifie si localStorage est disponible
  private checkLocalStorageAvailability(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }


   // Méthode pour stocker des données
   setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable) {
      localStorage.setItem(key, value);
    } else {
      console.warn('localStorage non disponible, impossible de stocker la donnée.');
    }
  }

  // Méthode pour récupérer des données
  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable) {
      return localStorage.getItem(key);
    } else {
      console.warn('localStorage non disponible, retour par défaut.');
      return null; //   retourner une valeur par défaut
    }
  }

  // Méthode pour supprimer des données
  removeItem(key: string): void {
    if (this.isLocalStorageAvailable) {
      localStorage.removeItem(key);
    } else {
      console.warn('localStorage non disponible, impossible de supprimer la donnée.');
    }
  }

  // Méthode pour vider le localStorage
  clear(): void {
    if (this.isLocalStorageAvailable) {
      localStorage.clear();
    } else {
      console.warn('localStorage non disponible, impossible de vider le stockage.');
    }
  }
}
