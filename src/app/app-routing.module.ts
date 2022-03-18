import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderExampleComponent } from "./render/render-example.component";
import { TestComponent } from "./test/test.component";
import { RoutingSiblingComponent } from "./routing-sibling/routing-sibling.component";

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'swiper', loadChildren: () => import('./swiper/swiper-example.module').then(mod => mod.SwiperExampleModule) },
  { path: 'render', component: RenderExampleComponent },
  { path: 'test', component: TestComponent },
  { path: 'parent', loadChildren: () => import('./routing/routing-routing.module').then(mod => mod.RoutingRoutingModule) },
  { path: 'parent-sibling', component: RoutingSiblingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
