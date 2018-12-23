import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './Search/search.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';


const Routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'landing', component: LandingPageComponent,
    children: [
      { path: 'users', component: UsersComponent, pathMatch: 'full' },
      { path: 'orders', component: OrdersComponent, pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRouting { }
