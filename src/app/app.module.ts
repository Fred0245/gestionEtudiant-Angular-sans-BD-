import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversiteComponent } from './universite/universite.component';
import { HeaderComponent } from './universite/header/header.component';
import { MenuComponent } from './universite/menu/menu.component';
import { AccueilComponent } from './universite/accueil/accueil.component';
import { EtudiantComponent } from './universite/etudiant/etudiant.component';
import { FiliereComponent } from './universite/filiere/filiere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AnneeacademiqueComponent } from './universite/anneeacademique/anneeacademique.component';
import { InscriptionComponent } from './universite/inscription/inscription.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UniversiteComponent,
    HeaderComponent,
    MenuComponent,
    AccueilComponent,
    EtudiantComponent,
    FiliereComponent,
    AnneeacademiqueComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
