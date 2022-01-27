import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfopersonneComponent } from './infopersonne/infopersonne.component';
import { LireJsonComponent } from './lire-json/lire-json.component';

const routes: Routes = [
  { path: '', component: LireJsonComponent },
  { path: 'details/:personnel', component: InfopersonneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
