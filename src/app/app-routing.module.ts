import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DegreeProgrammesComponent } from './degree-programmes/degree-programmes.component';
import { DegreeProgramDetailComponent } from './degree-program-detail/degree-program-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'degree-programmes', component: DegreeProgrammesComponent },
    { path: 'degree-programmes/:id', component: DegreeProgramDetailComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: '**', component: HomeComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
