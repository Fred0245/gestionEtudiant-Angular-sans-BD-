import { AnneeAcademique } from "./AnneeAcademique";
import { Etudiant } from "./Etudiant";
import { Filiere } from "./Filiere";

export class Inscription{

    
    etudiant :  Etudiant ;
    annee : AnneeAcademique;

  
    public constructor(){
       this.etudiant = new Etudiant();

       this.annee= new AnneeAcademique();
   
  
    }
  
  
  }