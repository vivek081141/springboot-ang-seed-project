import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {JQueryComponent} from './jquery.component';
import { SubjectContextComponent } from './subject-context/subject-context.component';
import {AppRoutingModule} from './app-routing-module';




@NgModule({
  declarations: [
    AppComponent,
    SubjectContextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }