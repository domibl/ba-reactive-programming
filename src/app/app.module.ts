import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Import material components */
import { MaterialModule } from './shared/material/material.module';

/* App components */
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DegreeProgrammesComponent } from './degree-programmes/degree-programmes.component';
import { DegreeProgramDetailComponent } from './degree-program-detail/degree-program-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        PlaygroundComponent,
        HomeComponent,
        DegreeProgrammesComponent,
        DegreeProgramDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
