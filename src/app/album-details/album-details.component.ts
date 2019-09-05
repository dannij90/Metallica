import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { collection } from '../../assets/data/collection';
import { Location } from '@angular/common';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  @ViewChild(ImagesComponent)
  private imagesComponent: ImagesComponent;
  album: any;
  single: any;
  visible: boolean;
  data: any;
  id: string;
  images: any;
  type: any;
  check: string;
  keyword: string;
  constructor(private route: Router, location: Location) {
    route.events.subscribe((val) => {
      if (location.path() !== '') {
        this.id = location.path().split('/')[2];
        this.type = location.path().split('/')[1];
      } else {
        this.id = location.path().split('/')[2];
        this.type = location.path().split('/')[1];
      }
      if (this.type === 'Albums') {
        this.check = location.path().split('/')[2];
        this.data = collection.albums[this.id];
      } else if (this.type === 'Singles') {
        this.check = location.path().split('/')[2]; //check 7 or 12
        this.id = location.path().split('/')[3];
        this.data = collection['singles' + this.check][this.id];
      }

    });
    // this.visible = false;
  }

  open(id, name) {

    if (this.type === 'Singles' && this.check === '7') {
      this.album = collection['singles7'][this.id].filter(val => val.id === id)[0];
      console.log(this.check);
      console.log('check');
    } else if (this.type === 'Singles' && this.check === '12') {
      this.album = collection['singles12'][this.id].filter(val => val.id === id)[0];
      console.log(this.check);
    } else {

      this.album = collection.albums[this.id].filter(val => val.id === id)[0];

    }
    this.prepareAlbum();
    console.log(this.album);



    /* this.album = collection.albums[this.id].filter(val => val.id === id)[0];
     this.prepareAlbum();
     console.log(this.album);*/
  }


  ngOnInit() {
  }

  compare(a, b) {
    if (a[this.keyword] < b[this.keyword]) {
      return -1;
    }
    if (a[this.keyword] > b[this.keyword]) {
      return 1;
    }

    if (a['country'] < b['country']) {
      return -1;
    }

    if (a['country'] > b['country']) {
      return 1;
    }
    return 0;
  }

  revcompare(a, b) {
    if (a[this.keyword] > b[this.keyword]) {
      return -1;
    }
    if (a[this.keyword] < b[this.keyword]) {
      return 1;
    }

    if (a['country'] < b['country']) {
      return -1;
    }

    if (a['country'] > b['country']) {
      return 1;
    }

    return 0;
  }

  changeSort(value) {
    if (value === this.keyword) {
      this.data.sort((a, b) => this.revcompare(a, b));
      this.keyword = '';
    } else {
      this.keyword = value;
      this.data.sort((a, b) => this.compare(a, b));
    }
  }

  prepareAlbum() {
    let images = new Array<string>();
    for (let i = 0; i < this.album.images; i++) {
      images.push(this.album.url + '/' + this.album.imagename + (i + 1) + '.jpg');
    }
    this.album.imageArray = images;
    console.log('this album!', this.album);

    //this.visible = true;

    // tell image component to display these images
    this.imagesComponent.resetAndPopulate(this.album);
  }
}
