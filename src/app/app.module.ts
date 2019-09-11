import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
// import { InMemoryWebApiModule } from "angular-in-memory-web-api"; // should be after HttpClientModule

import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from  '@angular/material';

import { AppComponent } from './app.component';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleAddComponent } from './article-add/article-add.component';

import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleViewComponent,
    ArticleEditComponent,
    ArticleAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
