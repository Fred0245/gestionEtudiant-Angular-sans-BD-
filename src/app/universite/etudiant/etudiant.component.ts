import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { Etudiant } from '../models/Etudiant';
import { Filiere } from '../models/Filiere';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {

  etudiant : Etudiant = new Etudiant();
  afficherListe:boolean=true;

  recherche !: string;
  nombre: number=1;

  etudiants : Etudiant[]=[];
  filieres : Filiere []=[];

  constructor(private etudiantService : EtudiantService,
    private filiereService : FiliereService,private route: ActivatedRoute,
    private router: Router) {
  
  }


  
  ngOnInit(): void {
    this.afficherListeEtudiant();
    this.afficherListeFiliere()
  }


  ajouter():void{
    console.log(this.etudiant)
  
    this.etudiantService.ajouterEtudiant(this.etudiant)
    this.etudiant = new Etudiant();
    this.afficherEtudiants();
  }
  
  afficherListeEtudiant (){
    this.etudiants = this.etudiantService.etudiants;
  }

  afficherFormulaire(){
    this.afficherListe=false;
  }
  afficherEtudiants(){
    this.afficherListe=true;
    
  }

  desactive(ajouter:number){
    this.etudiants[ajouter].status=false
  }
  active(ajouter:number){
    this.etudiants[ajouter].status=true
  }

  
  afficherListeFiliere (){
    this.filieres = this.filiereService.filieres;
   
  
  }

  inscrire(etudiant:Etudiant){

    console.log(etudiant)

    this.router.navigate(['/universite/inscription'], {queryParams:{my_object: JSON.stringify(etudiant)}});

  }

}
