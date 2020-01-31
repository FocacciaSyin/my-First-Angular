import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CustomizeComponent } from './customize/customize.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderNavNestedComponent } from './header-nav-nested/header-nav-nested.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [HeaderNavComponent, MainPageComponent, CustomizeComponent, HeaderNavNestedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule
  ],
  exports: [HeaderNavComponent, MainPageComponent, HeaderNavNestedComponent]
})
export class GuoRungModule { }
