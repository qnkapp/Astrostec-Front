import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilComponent } from './accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    LoginComponent,
    AccueilComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
