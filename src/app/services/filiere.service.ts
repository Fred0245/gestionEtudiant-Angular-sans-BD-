import { Injectable } from '@angular/core';
import { Filiere } from '../universite/models/Filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {


  constructor() { }

  filieres:any=[
    {
      code:"001",
      libelle:"Genie Logiciel",
      description:"la programmation pure",
 
    },
    {
      code:"002",
      libelle:"RSS",
      description:" description de RSS",
 
    },
    {
      code:"003",
      libelle:"Cyber Securité",
      description:"la vraie sécurité",
 
    },
   
  
  ];

  
  ajouterFiliere(filiere:Filiere):void{
  
    this.filieres.push(

      filiere
    
    )

  }


  afficherFilieres(){

      return this.filieres

  }
  
}

