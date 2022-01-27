import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LireJsonComponent } from './lire-json/lire-json.component';
import { PersonneComponent } from './personne/personne.component';
import { InfopersonneComponent } from './infopersonne/infopersonne.component';

@NgModule({
  declarations: [
    AppComponent,
    LireJsonComponent,
    PersonneComponent,
    InfopersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
