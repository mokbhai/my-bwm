import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ListOrderComponent } from './oders/list-order/list-order.component';
import { OdersModule } from './oders/oders.module';
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
