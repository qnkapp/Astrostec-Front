import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {component: BoutiqueComponent, path:'boutique'},
  {component: LoginComponent, path:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
