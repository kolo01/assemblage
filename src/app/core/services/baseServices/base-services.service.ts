import { Injectable } from '@angular/core';
import { environmentDev } from '../../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {

  private baseUrl: string = environmentDev.baseUrl;

  static header = {
    append:[
      'Content-Type','application/json',
      'Access-Control-Allow-Methods','GET,POST,PUT,DELETE',
      'Access-Control-Credentials','true',
      'Access-Control-Allow-Headers','location',
      'Accept','*/*',
      'Access-Control-Allow-Origin', '*'
    ]
  };


  constructor( private http: HttpClient) {}

  // ///fonction de creation de compte

  // signIn(endpoint: string,data:any): Observable<any> {
  //   const url = `${this.baseUrl}/${endpoint}/`;
  // }

  ////backend en cours
  getOne(id: number, endpoint: string): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
   return  this.http
      .get(url)
      .pipe()

  }



   httpPost(config : {url:string, http:HttpClient}, data:any, requestHeader?:any) {
    return config.http.post(config.url, data, {
      headers : requestHeader !== null && requestHeader !== undefined ? requestHeader: BaseServicesService.header,
      responseType : 'json',
      observe:'response'
    })
  }


  getAll(endpoint: string): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http
      .get(url)
      .pipe(shareReplay(1),catchError(this.handleError))

  }


  post(endpoint: string, data:any ) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.baseUrl}/${endpoint}/`;
    return this.http.post(url, data, { headers });




  }

  put(endpoint: string, id: number, data: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
   return this.http
   .put(url, data).pipe()}


  delete(endpoint: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
   return this.http
   .delete(url).pipe()}


   private handleError(error: any) : any {
      let errorMessage : string = 'Oups quelque chose a mal tourné'

        switch(error){


          case 400: errorMessage = 'Le formulaire est invalide'; break;
          case 401: errorMessage = 'Vous n\'êtes pas authentifié'; break;
          case 403: errorMessage = 'Vous n\'avez pas les droits nécessaires'; break;
          case 404: errorMessage = 'La page demandée n\'existe pas'; break;
          case 500: errorMessage = 'Une erreur interne du serveur s\'est produite'; break;
          default:
            errorMessage = `Erreur : ${error.status} - ${error.message}`;
        }
      return throwError((): Error =>new Error(errorMessage));
    }

}
