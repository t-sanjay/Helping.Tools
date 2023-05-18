import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SimpleToolsModule } from './simple-tools/simple-tools.module';
import { AuthclsGuard } from '../shared/guard/authcls.guard';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'', loadChildren: () => SimpleToolsModule,  canActivate: [AuthclsGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
