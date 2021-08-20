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
<<<<<<< HEAD
  {component: ForumComponent, path:'forum'},
  {component: CatalogueComponent, path:'catalogue'},
=======
  {component: ForumComponent, path:'forum'}
>>>>>>> 86e1ee036a945a1fdd09e0ac6871da62640ec314
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
