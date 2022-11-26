import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeService } from 'src/app/services/annee.service';
import { FiliereService } from 'src/app/services/filiere.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AnneeAcademique } from '../models/AnneeAcademique';
import { Etudiant } from '../models/Etudiant';
import { Filiere } from '../models/Filiere';
import { Inscription } from '../models/Inscription';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  a_fin : number =0;
  recherche !: string;
  nombre: number=1;


  
  constructor(private route: ActivatedRoute,private anneseervice : AnneeService,
    private inscriptionservice : InscriptionService , private router : Router){
      
    }
    
    
    inscrits : Inscription []=[];
    annees : AnneeAcademique []=[];
    
    etudiant : Etudiant = new Etudiant();


  
  afficherListe:boolean=false;

  filiere:Filiere = new Filiere();

  inscription : Inscription = new Inscription();


   



  afficherFormulaire(){
    this.afficherListe=true;
  }
  afficherEtudiants(){
    this.router.navigate(['/universite/etudiant'])
    
  }

  ajouter():void{

    this.a_fin = this.inscription.annee.annee_debut
    this.inscription.annee.annee_fin = (this.a_fin+1)
    this.inscription.annee.code ="00X";

    console.log(this.inscription,".......")

    this.inscriptionservice.addInscrit(this.inscription);
    this.afficherFormulaire();
    
  
    // this.filiereService.ajouterFiliere(this.filiere)
    // this.filiere = new Filiere();
    // console.log(this.filiere)
    // this.afficherEtudiants();
  }

  afficherListeFiliere (){
    this.inscrits = this.inscriptionservice.inscriptions;
  
  }

  afficherListeAnnee(){
    this.annees = this.inscriptionservice.annees

  }

  afficherListeInscrits(){
    this.inscrits=this.inscriptionservice.inscriptions
  }

  ngOnInit(){
    this.route.queryParams.subscribe((params : any)=>{
      console.log(params)
      this.etudiant = JSON.parse(params.my_object);  

      this.inscription.etudiant = this.etudiant;

      console.log(this.etudiant,"-------------")
      console.log(this.etudiant.nom," je dois voir le nom ici")
    })

    this.afficherListeAnnee();
    this.afficherListeInscrits();
  
  }

}
