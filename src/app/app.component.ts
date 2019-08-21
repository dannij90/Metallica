import { Component } from '@angular/core';
import { collection } from '../assets/data/collection';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatastoreService } from './datastore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;

  constructor(private route: Router, location: Location, dataservice: DatastoreService) {
    route.events.subscribe((val) => {
      if (location.path() !== '') {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    });
    this.data = dataservice.getAlbums();
   }
  title = 'Metallica';


  isHome: boolean;

  public counter(type) {
    var cnt = 0;
    for(var x in this.data[type]) {
      cnt += this.data[type][x].length;
      console.log(this.data[type][x]);
    }

    return cnt;
  }



 /* james = JSON.stringify(collection.albums['killemall']);*/
}
