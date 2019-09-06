import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { collection } from '../../assets/data/collection';
import { Location } from '@angular/common';
@Component({
  selector: 'app-singles',
  templateUrl: './singles.component.html',
  styleUrls: ['./singles.component.scss']
})
export class SinglesComponent implements OnInit, OnChanges {

  constructor(private route: Router, location: Location) {
    route.events.subscribe((val) => {
      if(location.path() !== '') {
        this.id = location.path().split('/')[2];
      } else {
        this.id = location.path().split('/')[2];
      }
      this.data = collection['singles' + this.id];
    });
  }

  objectKeys = Object.keys;
  data: any;
  id: string;

  ngOnInit() {
    console.log('hello world');
  }

  ngOnChanges(changes: SimpleChanges) {


 }

}
