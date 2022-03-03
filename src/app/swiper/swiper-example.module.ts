import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperExampleRoutingModule } from './swiper-example-routing.module';
import { SwiperExampleComponent } from "./swiper-example.component";
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    SwiperExampleComponent
  ],
  imports: [
    CommonModule,
    SwiperExampleRoutingModule,
    SwiperModule
  ]
})
export class SwiperExampleModule { }
