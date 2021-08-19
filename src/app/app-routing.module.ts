import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainPageComponent},
  {path: 'booking', component: BookingPageComponent},
  {path: 'gallery', component: GalleryComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
