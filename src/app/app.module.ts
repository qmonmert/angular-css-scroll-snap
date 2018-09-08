import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollSnapComponent } from './scroll-snap/scroll-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
