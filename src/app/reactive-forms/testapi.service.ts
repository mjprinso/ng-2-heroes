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
export class TestapiService {
  API_URL  =  'https://swapi.co/api/';
  // API_URL  =  'https://reqres.in/api/';

  constructor(private  httpClient:  HttpClient) { }

  getPlanets(): any {
    // return  this.httpClient.get(this.API_URL, httpOptions);
    return  this.httpClient.get(this.API_URL + 'planetss/', httpOptions);
    // return  this.httpClient.get(`${this.API_URL}users`, httpOptions);
  }

  getFilms(): any {
    return  this.httpClient.get(`${this.API_URL}people/`, httpOptions);
  }
}
