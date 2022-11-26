import { Filiere } from "./Filiere";

export class Etudiant{

    nom :  string ;
    prenom: string;
    filiere : Filiere;
    status: boolean;
  
    public constructor(){
  
      this.nom= '';
      this.prenom='';
      this.filiere= new Filiere();
      this.status = false
  
    }
  
  
  }