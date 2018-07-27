import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqAPIComponent } from './req-api/req-api.component';
import { SwapiAPIComponent } from './swapi-api/swapi-api.component';
import { StartComponent } from './start.component';

const routes: Routes = [
  {
    path     : '',
    component: StartComponent,
    // children: [
    //   {
    //     path     : 'reqAPI',
    //     component: ReqAPIComponent
    //   },
    //   {
    //     path     : 'swapiAPI',
    //     component: SwapiAPIComponent
    //   }
    // ]
  },
  {
    path     : 'reqAPI',
    // component: ReqAPIComponent
    loadChildren: './req-api/req-api.module#ReqApiModule'
  },
  {
    path     : 'swapiAPI',
    // component: SwapiAPIComponent
    loadChildren: './swapi-api/swapi-api.module#SwapiApiModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmoduleRoutingModule { }
