import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {component: BoutiqueComponent, path:'boutique'},
  {component: AccueilComponent, path:'Accueil'},
  {component: LoginComponent, path:'connexion'},
  {component: ForumComponent, path:'forum'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
