import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { collection } from '../../assets/data/collection';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  type: any;
  constructor(private route: Router, location: Location) {
    route.events.subscribe((val) => {
      if(location.path() !== '') {
        this.id = location.path().split('/')[2];
        this.type = location.path().split('/')[1];
      } else {
        this.id = location.path().split('/')[2];
        this.type = location.path().split('/')[1];
      }
      if (this.type === 'Albums') {
        this.data = collection.albums[this.id];
      } else if (this.type === 'Singles') {
        this.id = location.path().split('/')[3];
        this.data = collection['singles' + location.path().split('/')[2]][this.id];
      }

    });
    this.visible = false;
  }

  album: any;
  visible: boolean;
  data: any;
  id: string;
  images: any;

  open(id,name) {
    this.album = collection.albums[this.id].filter(val => val.id === id)[0];
    this.prepareAlbum();
    console.log(this.album);
    this.visible = true;
  }

  ngOnInit() {
  }

  prepareAlbum() {
    let images = new Array<string>();
    for(let i = 0; i < this.album.images; i++) {
      images.push(this.album.url + '/' + this.album.imagename + (i + 1) + '.jpg');
    }
    this.album.imageArray = images;
    console.log('this album!', this.album);
  }


}