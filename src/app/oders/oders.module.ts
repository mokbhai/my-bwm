import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [ListOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ],
  exports: [
    ListOrderComponent
  ]
})
export class OdersModule {}
