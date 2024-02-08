import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-confirmation',
  templateUrl: './snack-confirmation.component.html',
  styleUrl: './snack-confirmation.component.css'
})
export class SnackConfirmationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
}
