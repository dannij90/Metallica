import { Component, OnInit } from '@angular/core';
import { collection } from '../../assets/data/collection';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  data: any;
  objectKeys = Object.keys;
  constructor() { }


  ngOnInit() {
    this.data = collection.albums;

  }

}
