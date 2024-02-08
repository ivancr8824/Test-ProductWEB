import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
