import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Acess-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  API_URL  =  'https://swapi.co/api/';

  constructor(private  httpClient:  HttpClient) { }

  getData(param: string): any {
    return  this.httpClient.get(this.API_URL + param + '/', httpOptions);
  }

  // getSpecies(): any {
  //   return  this.httpClient.get(`${this.API_URL}`, httpOptions);
  // }
}
