import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pretty',
  templateUrl: './make-word-pretty.component.html',
  styleUrls: ['../album-details/album-details.component.scss']
})
export class MakeWordPrettyComponent implements OnInit {

  constructor() { }

  @Input()
  public data: string;
  wordarr: Array<string>;
  ngOnInit() {
    this.wordarr = this.data.split(' ');
  }

}
