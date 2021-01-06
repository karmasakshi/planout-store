import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainComponent } from './components/main/main.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  bootstrap: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    ProductPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class AppModule { }
