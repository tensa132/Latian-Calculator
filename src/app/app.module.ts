import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HasilPageComponent } from './hasil-page/hasil-page.component';

import { Routes, RouterModule } from '@angular/router';
const ROUTES: Routes=[
  {path:'hasil-page/:result', component: HasilPageComponent},
] 
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, HasilPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
