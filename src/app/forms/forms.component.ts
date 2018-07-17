import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  // form: heroForm;

  onSubmit() { 
    this.submitted = true;
    console.log('form submitted');
    this.model = new Hero(42, '', '');
    // heroForm.form.reset()
    // heroForm.resetForm(); // I think this is the one to use
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
