import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule,
  ]
})
export class RoutingModule { }
