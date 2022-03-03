import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderExampleComponent } from "./render/render-example.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: 'swiper', loadChildren: () => import('./swiper/swiper-example.module').then(mod => mod.SwiperExampleModule) },
  { path: 'render', component: RenderExampleComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
