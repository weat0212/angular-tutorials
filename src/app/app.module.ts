import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperExampleModule } from "./swiper/swiper-example.module";
import { RenderExampleComponent } from './render/render-example.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderExampleComponent
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
