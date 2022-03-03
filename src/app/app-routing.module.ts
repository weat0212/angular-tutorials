import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperComponent } from "./swiper/swiper.component";

const routes: Routes = [
  { path: 'swiper', component: SwiperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
