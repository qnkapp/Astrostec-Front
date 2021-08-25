import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailProduitBoutiqueComponent } from './detail-produit-boutique/detail-produit-boutique.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './forum/forum.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PlanetesComponent } from './planetes/planetes.component';
import { SatellitesComponent } from './satellites/satellites.component';
import { ChatComponent } from './chat/chat.component';
import { VerifySameEmailDirective } from './sign-up/sign-up-directives/verifySameEmail.directive';
import { VerifySameMdpDirective } from './sign-up/sign-up-directives/verifySameMdp.directive';

import { DetailPlanetesComponent } from './detail-planetes/detail-planetes.component';
import { PanierComponent } from './panier/panier.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { SujetsComponent } from './sujets/sujets.component';
import { GestionMembreComponent } from './gestion-membre/gestion-membre.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ValidationAdminComponent } from './gestion-membre/validation-admin/validation-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    LoginComponent,
    AccueilComponent,
    DetailProduitBoutiqueComponent,
    ForumComponent,
    SignUpComponent,
    PlanetesComponent,
    SatellitesComponent,
    ChatComponent,
    VerifySameEmailDirective,
    VerifySameMdpDirective,
    DetailPlanetesComponent,
    PanierComponent,
    PiedDePageComponent,
    SujetsComponent,
    GestionMembreComponent,
    ValidationAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
