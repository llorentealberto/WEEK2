import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HomePage2Component } from './page/home-page2/home-page2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePage2Component,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
