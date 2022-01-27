import { Component, OnInit } from '@angular/core';
import Json from '../../assets/user.json';
import { Personne } from '../models/personne';

//import JSON + Interfaces

@Component({
  selector: 'app-lire-json',
  templateUrl: './lire-json.component.html',
  styleUrls: ['./lire-json.component.css'],
})
export class LireJsonComponent implements OnInit {
  constructor() {}

  //Déclaration des proprièté pour le tri des catégories au sein d'Angular

  lireJson: Personne[] = Json.results as any;

  //Force la déclaration de la variable pour lui dire qu'elle va être initialisé au chargement de la page

  moins40!: Personne[];
  age60and40!: Personne[];
  plusde60!: Personne[];

  ngOnInit(): void {
    // Fonction JS basique de filtrage de données via le JSON importé

    this.moins40 = this.lireJson.filter((Personne) => Personne.dob.age <= 40);
    this.age60and40 = this.lireJson.filter(
      (Personne) => Personne.dob.age > 40 && Personne.dob.age <= 60
    );
    this.plusde60 = this.lireJson.filter((Personne) => Personne.dob.age > 60);
    this.lireJson[0];
  }
}
