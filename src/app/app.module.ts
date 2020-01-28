import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuoRungModule } from './guo-rung/guo-rung.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GuoRungModule } from "./guo-rung/guo-rung.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
>>>>>>> 0b5678bd3abad7a9b42b72d8a7f796d781e951fd

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuoRungModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
