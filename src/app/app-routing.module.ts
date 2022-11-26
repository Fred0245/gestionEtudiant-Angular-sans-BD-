import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './universite/accueil/accueil.component';
import { AnneeacademiqueComponent } from './universite/anneeacademique/anneeacademique.component';
import { EtudiantComponent } from './universite/etudiant/etudiant.component';
import { FiliereComponent } from './universite/filiere/filiere.component';
import { InscriptionComponent } from './universite/inscription/inscription.component';
import { UniversiteComponent } from './universite/universite.component';

const routes: Routes = [

  {path:'',redirectTo:'universite/accueil',pathMatch:'full'},

  {path:'universite',component:UniversiteComponent,
  children : [
      {path: 'accueil',component:AccueilComponent},
      {path: 'etudiant',component:EtudiantComponent},
      {path: 'filiere',component:FiliereComponent},
      {path: 'annee',component:AnneeacademiqueComponent},
      {path: 'inscription',component:InscriptionComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
