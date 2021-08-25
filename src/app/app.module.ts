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
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataPassService } from './dataPassService';
import { MatSelectModule } from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';










@NgModule({
  declarations: [
    MenuComponent,
    MainPageComponent,
    FooterComponent,
    BookingPageComponent,
    GalleryComponentComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [DataPassService, DatePipe],
  bootstrap: [MenuComponent]
})
export class AppModule { }
