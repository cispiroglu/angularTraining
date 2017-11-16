import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AccountComponent } from './account/account.component';

export const RouteConfigs: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: ':productId',
        component: ProductComponent
      }
    ]
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];
