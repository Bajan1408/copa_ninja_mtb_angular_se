import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PageFourComponent } from './components/page-four/page-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardOneComponent,
    PhotosComponent,
    CardTwoComponent,
    CarrouselComponent,
    PageFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
