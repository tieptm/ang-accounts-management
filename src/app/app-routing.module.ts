import { CreateAccountComponent } from './account/create-account/create-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { IdxAccountComponent } from './account/idx-account/idx-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'accounts', component: IdxAccountComponent},
  {path: 'accounts/create', component: CreateAccountComponent},
  {path: 'accounts/:id/edit', component: UpdateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
