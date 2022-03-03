import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperExampleComponent {

  constructor() {
  }

  swiperConfig: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
}
