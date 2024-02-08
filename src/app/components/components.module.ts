import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackConfirmationComponent } from './snack-confirmation/snack-confirmation.component';



@NgModule({
  declarations: [
    SnackConfirmationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SnackConfirmationComponent
  ]
})
export class ComponentsModule { }
