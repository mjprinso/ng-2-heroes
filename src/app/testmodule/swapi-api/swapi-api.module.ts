import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SwapiAPIComponent } from './swapi-api.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {
    path     : '',
    component: SwapiAPIComponent,
    children : [
      {
        path     : 'planets',
        component: PlanetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SwapiAPIComponent,
    PlanetsComponent
  ]
})
export class SwapiApiModule { }
