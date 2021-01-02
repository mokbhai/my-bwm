import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './list-order/list-order.component';

const routes: Routes = [
  {
    path: 'orders', component: ListOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
