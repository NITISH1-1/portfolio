import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './journey-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    routes
  ]
})
export class JourneyModule { }
