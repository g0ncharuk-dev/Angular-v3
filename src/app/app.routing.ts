import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', loadChildren: './main/main.module#MainModule'},
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
