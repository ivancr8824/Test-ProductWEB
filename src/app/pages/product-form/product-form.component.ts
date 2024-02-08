import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { SnackConfirmationComponent } from '../../components/snack-confirmation/snack-confirmation.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private snackBar = inject( MatSnackBar );
  private route = inject(ActivatedRoute);

  public isSaving: boolean = false;
  public title: string = 'Nuevo Producto';

  public productForm: FormGroup = this.fb.group({
    upc: ['', Validators.required],
    name: ['', Validators.required],
    model: ['', Validators.required],
    price: ['', Validators.required],
    stock: ['', Validators.required]
  });

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] !== 'new') {
      this.title = 'Editar Producto'
      this.productService.getProductById(this.route.snapshot.params['id']).subscribe(product => {
        this.productForm.patchValue({
          upc: product.upc,
          name: product.name,
          model: product.model,
          price: product.unitListPrice,
          stock: product.unitsInStock
        });
      })
    }
  }

  public isValidField(field: string) {
    return this.productForm.controls[field].errors && this.productForm.controls[field].touched;
  }

  public onSubmit(){
    this.isSaving = true;
    const { upc, name, model, price, stock } = this.productForm.value;

    if (this.route.snapshot.params['id'] === 'new') {
      const newProduct: Product = { upc, name, model, unitListPrice: price, unitsInStock: stock };
      this.productService.addProduct(newProduct).subscribe(producto => {
        this.isSaving = false;
        this.snackBar.openFromComponent(SnackConfirmationComponent, {
          data: 'Producto Agregado correctamente',
          duration: 4000,
          panelClass: 'success-snack',
          horizontalPosition: 'start',
          verticalPosition: 'bottom'
        });
      })
    } else {
      const editedProduct: Product = { id: this.route.snapshot.params['id'], name, upc, model,
        unitListPrice: price, unitsInStock: stock };

      this.productService.updateProduct(editedProduct).subscribe(x => {
        this.isSaving = false;
        this.snackBar.openFromComponent(SnackConfirmationComponent, {
          data: 'Producto Actualizado Correctamente',
          duration: 4000,
          panelClass: 'success-snack',
          horizontalPosition: 'start',
          verticalPosition: 'bottom'
        });
      });
    }
  }
}
