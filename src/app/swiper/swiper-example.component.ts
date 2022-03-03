import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss']
})
export class SwiperExampleComponent {

  constructor() {
  }

  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
