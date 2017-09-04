import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/home/product-detail.component';
import { ProductNavComponent } from "./components/home/product-nav.component";

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { MdListModule } from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdListModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }