import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Array<any>;

  constructor( private swapi: ApiserviceService ) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(): any {
    // this.swapi.getData('planets').subscribe(data => {
    this.swapi.getData('planets').subscribe(data => {
        console.log(data);
        this.planets = data.results;
      },
      error =>  {
        console.log(error.status);
      }
    );
  }

}
