import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UrbanisationComponent } from './urbanisation/urbanisation.component';
import { ProjetComponent } from './projet/projet.component';
import { RouteTrottoirComponent } from './route-trottoir/route-trottoir.component';
import { ActeNaissanceComponent } from './EtatCivil/acte-naissance/acte-naissance.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    UrbanisationComponent,
    ProjetComponent,
    RouteTrottoirComponent,
    ActeNaissanceComponent,
    ReclamationComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
