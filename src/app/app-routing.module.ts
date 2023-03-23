import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', loadChildren: () => AuthenticateModule },
  { path: 'dashboard', loadChildren: () => UserModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
