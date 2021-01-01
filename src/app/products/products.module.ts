import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';
import { ViewProductByCatComponent } from './view-product-by-cat/view-product-by-cat.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductComponent,
    ViewSingleProductComponent,
    ViewProductByCatComponent,
    ViewProductByDateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
