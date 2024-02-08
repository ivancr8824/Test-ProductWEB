import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  private productService = inject(ProductService);

  displayedColumns: string[] = ['upc', 'name', 'model', 'price', 'stock', 'action'];
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products)
      this.products = products
    });
  }

  deleteProduct(id: string) {
    Swal.fire({
      title: "Estas seguro de eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(x => {
          this.products = this.products.filter(p => p.id !== id);
          Swal.fire({
            title: "Eliminado",
            text: "El producto ha sido eliminado correctamente.",
            icon: "success"
          });
        });
      }
    })
  }
}
