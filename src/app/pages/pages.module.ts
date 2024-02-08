import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLayoutComponent } from './layout/product-layout.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AngularMaterialModule } from '../angularMaterial/angular-material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProductLayoutComponent,
    ListProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
