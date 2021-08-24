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
<<<<<<< HEAD
import { DetailPlanetesComponent } from './detail-planetes/detail-planetes.component';
import { SolaireComponent } from './solaire/solaire.component';
=======
import { DetailPlanetesComponent } from './detail-planetes/detail-planetes.component'

>>>>>>> 8edc827be9605f791df1964a4f83096e629a2030

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
    SolaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
