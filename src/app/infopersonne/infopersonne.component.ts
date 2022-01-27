import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Json from '../../assets/user.json';
import { Personne } from '../models/personne';

//import du JSON et Router

@Component({
  selector: 'app-infopersonne',
  templateUrl: './infopersonne.component.html',
  styleUrls: ['./infopersonne.component.css'],
})
export class InfopersonneComponent implements OnInit {
  constructor(private personnels: ActivatedRoute) {}

  lirejson: Personne[] = Json.results as any;

  resultats!: Personne;

  ngOnInit(): void {
    //Déclaration d'une observable
    this.personnels.params.subscribe((x: any) => {
      this.resultats = this.lirejson.find(
        (personne) => personne.login.uuid === x.personnel
      )!;
    });
  }
}
