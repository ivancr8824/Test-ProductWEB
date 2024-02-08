import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductLayoutComponent } from './layout/product-layout.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductFormComponent } from './product-form/product-form.component';



const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      { path: 'list', component: ListProductsComponent },
      { path: 'product/:id', component: ProductFormComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
