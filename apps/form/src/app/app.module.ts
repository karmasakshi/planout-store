import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, MatToolbarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule { }
