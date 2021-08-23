import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ChatComponent } from './chat/chat.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { PlanetesComponent } from './planetes/planetes.component';
import { SatellitesComponent } from './satellites/satellites.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { component: BoutiqueComponent, path: 'boutique' },
  { component: AccueilComponent, path: 'Accueil' },
  { component: LoginComponent, path: 'connexion' },
  {
    component: ForumComponent, path: 'forum', children: [
    { component: ChatComponent, path: 'chat' },
    ]
  },
  { component: SignUpComponent, path: 'sign-up' },
  { component: PlanetesComponent, path: 'planetes' },
  { component: SatellitesComponent, path: 'satellites' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
