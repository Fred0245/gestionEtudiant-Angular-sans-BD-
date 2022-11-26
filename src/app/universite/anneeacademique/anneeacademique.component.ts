import { Component } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AnneeAcademique } from '../models/AnneeAcademique';

@Component({
  selector: 'app-anneeacademique',
  templateUrl: './anneeacademique.component.html',
  styleUrls: ['./anneeacademique.component.css']
})
export class AnneeacademiqueComponent {

  debut :number=2020;
  fin :number=2021;
  code : string="";

  
  recherche !: string;
  nombre: number=1;
  
  annee : AnneeAcademique = new AnneeAcademique();
  listeAnnnes : AnneeAcademique []=[]

 
  
  

  constructor(private inscriptionService : InscriptionService ){


  }



  ngOnInit(){
    this.afficherListeAnnee();
  }

  ajouter(){
    this.inscriptionService.ajouter();
  }

  
  afficherListeAnnee (){
    this.listeAnnnes = this.inscriptionService.annees;
  }

}
