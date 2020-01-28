import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CustomizeComponent } from './customize/customize.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderNavComponent, MainPageComponent, CustomizeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [HeaderNavComponent, MainPageComponent]
})
export class GuoRungModule { }
