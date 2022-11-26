import { Component } from '@angular/core';
import { FiliereService } from 'src/app/services/filiere.service';
import { Filiere } from '../models/Filiere';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent {


  filieres : Filiere []=[];

  recherche !: string;
  nombre: number=1;



  
  afficherListe:boolean=true;

  filiere:Filiere = new Filiere();

  ngOnInit(): void {

    this.afficherListeFiliere();
  }

   
  constructor(private filiereService : FiliereService) {

  }



  afficherFormulaire(){
    this.afficherListe=false;
  }
  afficherEtudiants(){
    this.afficherListe=true;
    
  }

  ajouter():void{
  
    this.filiereService.ajouterFiliere(this.filiere)
    this.filiere = new Filiere();
    console.log(this.filiere)
    this.afficherEtudiants();
  }

  afficherListeFiliere (){
  

    this.filieres = this.filiereService.filieres;
   
  
  }

}

