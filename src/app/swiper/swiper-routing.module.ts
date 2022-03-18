import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperExampleComponent } from "./swiper-example.component";

const routes: Routes = [
  { path: '', component: SwiperExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwiperRoutingModule { }
