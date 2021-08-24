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
import { SourceComponent } from './source/source.component';
import { AuthGuard } from './_helpers/auth.guard';
<<<<<<< HEAD
import { SujetsComponent } from './sujets/sujets.component';
=======
import { GestionMembreComponent } from './gestion-membre/gestion-membre.component';
>>>>>>> 957104681d0be5295ed834d2b4cdfdb2c6d93852

const routes: Routes = [
  { component: BoutiqueComponent, path: 'boutique' },
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  { component: AccueilComponent, path: 'Accueil' },
  { component: LoginComponent, path: 'connexion' },
  {
    component: ForumComponent, path: 'forum', children: [
    { component: ChatComponent, path: 'chat' }, { component: DiscussionsComponent, path: 'discussions' },
    { component: SujetsComponent, path: 'sujets' }
    ],
    canActivate: [AuthGuard]
  },
  { component: SignUpComponent, path: 'sign-up' },
  { component: PlanetesComponent, path: 'planetes' },
  { component: SatellitesComponent, path: 'satellites' },
  { component: DetailPlanetesComponent, path: 'detail-planetes' },
  { component: DetailSatellitesComponent, path: 'detail-satellites' },
  { component: SolaireComponent, path: 'solaire'},
  { component: SourceComponent, path: 'source'},
  { component: GestionMembreComponent, path: 'gestion-membre', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
