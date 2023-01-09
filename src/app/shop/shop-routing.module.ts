import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopFormComponent } from './shop-form/shop-form.component';

const routes: Routes = [
  {
    path: 'shop-form',
    component: ShopFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
