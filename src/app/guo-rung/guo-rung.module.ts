import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CustomizeComponent } from './customize/customize.component';
import { MatButtonModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';


@NgModule({
  declarations: [HeaderNavComponent, MainPageComponent, CustomizeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule

  ],
  exports: [HeaderNavComponent, MainPageComponent]
})
export class GuoRungModule { }
