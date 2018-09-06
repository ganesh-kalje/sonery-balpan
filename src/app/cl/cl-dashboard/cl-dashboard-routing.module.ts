import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CldashboardComponent } from './cldashboard.component';

const routes: Routes = [
	{
        path: '', component: CldashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClDashboardRoutingModule { }
