import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trys',
  templateUrl: './trys.component.html',
  styleUrls: ['./trys.component.css']
})
export class TrysComponent implements OnInit {

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  values = '';

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  valuesFunc = '';
  onKeyFunc(value: string) {
    this.valuesFunc += value + ' | ';
  }

  valueEnt = '';
  onEnter(value: string) { this.valueEnt = value; }

  constructor() { }

  ngOnInit() {
  }

}
