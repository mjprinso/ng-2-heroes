import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
// import { ReqAPIComponent } from './req-api/req-api.component';
// import { SwapiAPIComponent } from './swapi-api/swapi-api.component';
import { StartComponent } from './start.component';

@NgModule({
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
  declarations: [
    // ReqAPIComponent,
    // SwapiAPIComponent,
    StartComponent
  ]
})
export class TestmoduleModule { }
