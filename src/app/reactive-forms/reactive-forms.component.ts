import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TestapiService } from './testapi.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  profileForm2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(private apiService: TestapiService) { }

  ngOnInit() {
    this.getPlanets();
    this.getFilms();
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  getPlanets(): any {
    // this.apiService.getPlanets().subscribe((data:  Array<object>) => {
    //   console.log(data);
    // });
    this.apiService.getPlanets().subscribe(data => {
        console.log(data);
      },
      error =>  {
        console.log(error.status);
      }
    );
  }

  getFilms(): any {
    this.apiService.getFilms().subscribe((data:  Array<object>) => {
      // this.contacts  =  data;
      console.log(data);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm2.value);
  }

}
