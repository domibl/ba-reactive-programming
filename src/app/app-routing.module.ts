import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DegreeProgramsComponent } from './degree-programs/degree-programs.component';
import { DegreeProgramDetailComponent } from './degree-program-detail/degree-program-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'degree-programs', component: DegreeProgramsComponent },
    { path: 'degree-programs/:id', component: DegreeProgramDetailComponent },
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
