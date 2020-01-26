import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [HeaderNavComponent, MainPageComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderNavComponent, MainPageComponent]
})
export class GuoRungModule { }
