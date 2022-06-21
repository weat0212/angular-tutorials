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
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ChildComponent } from './content-projection/child/child.component';
import { AuthRememberComponent } from './content-projection/auth-remember/auth-remember.component';
import { FormChangeComponent } from './form-change/form-change.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { TwDate2CalendarPipe } from './shared/pipes/TwDate2Calendar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RenderExampleComponent,
    HighlightDirective,
    TestComponent,
    RoutingComponent,
    RoutingSiblingComponent,
    ContentProjectionComponent,
    ChildComponent,
    AuthRememberComponent,
    FormChangeComponent,
    TwDate2CalendarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperExampleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
