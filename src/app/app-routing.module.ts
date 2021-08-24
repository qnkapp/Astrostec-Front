import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ChatComponent } from './chat/chat.component';
import { DetailPlanetesComponent } from './detail-planetes/detail-planetes.component';
import { DetailSatellitesComponent } from './detail-satellites/detail-satellites.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { PlanetesComponent } from './planetes/planetes.component';
import { SatellitesComponent } from './satellites/satellites.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { SolaireComponent } from './solaire/solaire.component';

const routes: Routes = [
  { component: BoutiqueComponent, path: 'boutique' },
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  { component: AccueilComponent, path: 'Accueil' },
  { component: LoginComponent, path: 'connexion' },
  {
    component: ForumComponent, path: 'forum', children: [
    { component: DiscussionsComponent, path: 'discussions' },
    ]
  },
  { component: SignUpComponent, path: 'sign-up' },
  { component: PlanetesComponent, path: 'planetes' },
  { component: SatellitesComponent, path: 'satellites' },
  { component: DetailPlanetesComponent, path: 'detail-planetes' },
  { component: DetailSatellitesComponent, path: 'detail-satellites' },
  { component: SolaireComponent, path: 'solaire'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
