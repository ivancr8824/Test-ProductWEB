import { Injectable, inject } from '@angular/core';
import { DataService } from './data-service.service';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataService = inject(DataService);

  public getProducts(): Observable<Product[]> {
    return this.dataService.get<Product[]>('/product');
  }

  public getProductById(id: string): Observable<Product> {
    return this.dataService.get<Product>(`/product/${id}`);
  }

  public addProduct(newProduct: Product): Observable<Product> {
    return this.dataService.post<Product>('/product', newProduct);
  }

  public updateProduct(updateProduct: Product): Observable<boolean> {
    return this.dataService.put<boolean>('/product', updateProduct);
  }

  public deleteProduct(id: string): Observable<boolean> {
    return this.dataService.delete<boolean>(`/product/${id}`);
  }
}
