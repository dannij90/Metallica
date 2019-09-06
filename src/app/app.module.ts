import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { SinglesComponent } from './singles/singles.component';
import { BoxSetComponent } from './box-set/box-set.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { MakeWordPrettyComponent } from './make-word-pretty/make-word-pretty.component';
import { ImagesComponent } from './images/images.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // for bootstrap

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    SinglesComponent,
    BoxSetComponent,
    AlbumDetailsComponent,
    MakeWordPrettyComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
