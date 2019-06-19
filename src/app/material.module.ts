import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatListModule
],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
]
})
export class MaterialModule { }