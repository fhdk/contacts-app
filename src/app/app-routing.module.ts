import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import { AuthGuardService } from './login/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    canActivate: [ AuthGuardService ],
    children: [
      {path: 'edit/:id', component: ContactEditComponent},
      {path: 'detail/:id', component: ContactDetailComponent},
      {path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {
}
