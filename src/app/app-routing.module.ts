import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActeNaissanceComponent } from './EtatCivil/acte-naissance/acte-naissance.component';
import { EtatCivilComponent } from './EtatCivil/etat-civil/etat-civil.component';
import { LoginComponent } from './login/login.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UrbanisationComponent } from './urbanisation/urbanisation.component';
const routes: Routes = [
  {path: 'acceuil' , component: AccueilComponent},
  {path:'etat', component: EtatCivilComponent},
  {path:'naissance', component: ActeNaissanceComponent},
  {path:'urbanisation', component: UrbanisationComponent},
  {path:'reclamation', component: ReclamationComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
//export const routingComponents = [EtatCivilComponent,ActeNaissanceComponent,ReclamationComponent,UrbanisationComponent]

