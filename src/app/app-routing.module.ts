import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizeComponent } from './guo-rung/customize/customize.component';
import { MainPageComponent } from './guo-rung/main-page/main-page.component';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'customize', component: CustomizeComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
