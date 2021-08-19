import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';

import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [
    MenuComponent,
    MainPageComponent,
    FooterComponent,
    BookingPageComponent,
    GalleryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
