import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperExampleModule } from "./swiper/swiper-example.module";
import { RenderExampleComponent } from './render/render-example.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { TestComponent } from './test/test.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingSiblingComponent } from './routing-sibling/routing-sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderExampleComponent,
    HighlightDirective,
    TestComponent,
    RoutingComponent,
    RoutingSiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
