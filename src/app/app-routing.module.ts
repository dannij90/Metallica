import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SinglesComponent } from './singles/singles.component';
import { BoxSetComponent } from './box-set/box-set.component';
import { collection } from '../assets/data/collection';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  { path: 'Albums', component: AlbumsComponent},
  { path: 'Singles', component: SinglesComponent },
  { path: 'Singles/:id', component: SinglesComponent },
  { path: 'Singles/7/:id', component: AlbumDetailsComponent },
  { path: 'Singles/12/:id', component: AlbumDetailsComponent },
  { path: 'Box-Sets', component: BoxSetComponent },
  { path: 'Albums/:id', component: AlbumDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
