import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

//import du model(l'interface) personne

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  constructor() {}

  //Rapport parent enfant (communication des données actives)

  @Input() personne!: Personne;

  ngOnInit(): void {}
}
