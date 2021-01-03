import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCatComponent } from './view-product-by-cat/view-product-by-cat.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';

const routes: Routes = [
  { path: 'all', component: ProductsComponent },
  { path: 'deleteProd', component: DeleteProductComponent },
  { path: 'updateProd/:id?:cat', component: UpdateProductComponent },
  { path: 'Products', component: ViewAllProductComponent },
  { path: 'ProdInfo/:id?:cat', component: ViewSingleProductComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'view/:id?:cat=', component: ViewProductByCatComponent },
  { path: 'view/date', component: ViewProductByDateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
