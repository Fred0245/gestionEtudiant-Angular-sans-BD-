import { Component } from '@angular/core';
import { AnneeService } from 'src/app/services/annee.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AnneeAcademique } from '../models/AnneeAcademique';
import { Etudiant } from '../models/Etudiant';
import { Filiere } from '../models/Filiere';
import { Inscription } from '../models/Inscription';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {


  listeAnnnes : AnneeAcademique []=[];
  etudiants : Etudiant[]=[];
  filieres : Filiere []=[];
  inscrits : Inscription []=[];

  constructor(private anneservice : AnneeService, 
    private etudiantService : EtudiantService, 
    private filiereService : FiliereService,private  inscriptionService  : InscriptionService,){

  }

  ngOnInit():void{

    this.afficherListeAnnee()
    this.afficherListeEtudiant()
    this.afficherListeFiliere()
    this.afficherListeInscrits()

    

  }

  
  afficherListeFiliere (){
    this.filieres = this.filiereService.filieres;
    console.log(this.filieres)
   
  
  }

  afficherListeEtudiant (){
    this.etudiants = this.etudiantService.etudiants;
  }

  afficherListeInscrits(){
    this.inscrits=this.inscriptionService.inscriptions
  }

  afficherListeAnnee(){
    this.listeAnnnes = this.inscriptionService.annees

  }

}
