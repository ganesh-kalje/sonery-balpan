import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'celebrity', loadChildren: './celebrity/celebrity.module#CelebrityModule' },
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
            { path: 'bonus', loadChildren: './bonus/bonus.module#BonusModule' },
            { path: 'password-change', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
