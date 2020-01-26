import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuoRungModule } from './guo-rung/guo-rung.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuoRungModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
