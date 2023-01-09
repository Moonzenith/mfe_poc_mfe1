import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { ShopRoutingModule } from './shop-routing.module';




@NgModule({
  declarations: [ShopFormComponent],
  imports: [CommonModule, FormsModule, ShopRoutingModule],
})
export class ShopModule {}
