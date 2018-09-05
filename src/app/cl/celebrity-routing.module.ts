import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CelebrityComponent } from './celebrity.component';

const routes: Routes = [
	{
        path: '',
        component: CelebrityComponent,
        children: [
            { path: '', redirectTo: 'cl-dashboard', pathMatch: 'prefix' },
            { path: 'cl-dashboard', loadChildren: './cl-dashboard/cl-dashboard.module#ClDashboardModule' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrityRoutingModule { }
