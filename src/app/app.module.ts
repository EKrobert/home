import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";

@NgModule({
  
    providers: [],
    imports: [
        BrowserModule,
        HomeComponent
    ]
})
export class AppModule { }
