import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ rutas } from './rutas';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

