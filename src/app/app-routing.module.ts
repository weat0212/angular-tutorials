import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderExampleComponent } from "./render/render-example.component";
import { TestComponent } from "./test/test.component";
import { RoutingSiblingComponent } from "./routing-sibling/routing-sibling.component";
import { ChildComponent } from "./content-projection/child/child.component";
import { ContentProjectionComponent } from "./content-projection/content-projection.component";
import { FormChangeComponent } from "./form-change/form-change.component";

const routes: Routes = [
  {path: '', component: TestComponent},
  {path: 'swiper', loadChildren: () => import('./swiper/swiper-example.module').then(mod => mod.SwiperExampleModule)},
  {path: 'render', component: RenderExampleComponent},
  {path: 'test', component: TestComponent},
  {path: 'form', component: FormChangeComponent},
  {
    path: 'parent',
    loadChildren: () => import('./routing/routing-routing.module').then(mod => mod.RoutingRoutingModule)
  },
  {path: 'parent-sibling', component: RoutingSiblingComponent},
  {
    path: 'content-projection', component: ContentProjectionComponent, children: [{
      path: '', component: ChildComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
