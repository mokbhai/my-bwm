import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './oders/list-order/list-order.component';

const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import ('./oders/oders.module').then(ma=> ma.OdersModule),
    component: ListOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
