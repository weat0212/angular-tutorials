import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { RoutingComponent } from "./routing.component";

const routes: Routes = [
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: '',
    component: RoutingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}
