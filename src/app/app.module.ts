import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailProduitBoutiqueComponent } from './detail-produit-boutique/detail-produit-boutique.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    LoginComponent,
    AccueilComponent,
    CatalogueComponent,
    DetailProduitBoutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
