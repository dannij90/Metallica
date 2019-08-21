import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  data: any;
  @Input()
  visible: boolean;
  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Input()
  album: any;

  images: Array<string>;
  visibleImages: Array<string>;
  indexes: Array<number>;
  selectedImage: string;

  selectedIndex: number;

  constructor(dataservice: DatastoreService) {
    this.visible = false;
    this.indexes = [0, 1, 2, 3];
    // this.data = dataservice.getAlbums();
    // this.images = this.album ? this.album.imageArray : [];

    // this.images = [
    //   "../../assets/photos/killemall/canada-banzai-1st/banzai-white-1.jpg",
    //   "../../assets/photos/killemall/canada-banzai-1st/banzai-white-2.jpg",
    //   "../../assets/photos/killemall/canada-banzai-1st/banzai-white-3.jpg",
    //   "../../assets/photos/killemall/canada-banzai-1st/banzai-white-4.jpg",
    //    "../../assets/photos/killemall/canada-banzai-1st/banzai-white-5.jpg",
    //    "../../assets/photos/killemall/canada-banzai-1st/banzai-white-6.jpg",
    //   "../../assets/photos/killemall/canada-banzai-1st/banzai-white-7.jpg",
    //    "../../assets/photos/killemall/canada-banzai-1st/banzai-white-8.jpg",
    //    "../../assets/photos/killemall/canada-banzai-1st/banzai-white-9.jpg"
    // ];

   // this.populateImages();

    this.selectedIndex = 0;
   }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log('closing .. ', this.visible);
  }

  changeImage(id) {
    console.log('change image id:', id);
    this.selectedIndex = id;

    this.selectedImage = this.visibleImages[this.selectedIndex];
  }

  dec() {
    for(let i = 0; i < this.indexes.length; i++) {
      if(this.indexes[i] - 1 < 0) {
        this.indexes[i] = this.album.imageArray.length - 1;
      } else {
        this.indexes[i] = this.indexes[i] - 1;
      }
    }

    this.populateImages();

  }

  inc() {
    console.log('this.album inside inc', this.album)
    for(let i = 0; i < this.indexes.length; i++) {
      if(this.indexes[i] + 1 > this.album.imageArray.length - 1) {
        this.indexes[i] = 0;
      } else {
        this.indexes[i] = this.indexes[i] + 1;
      }
    }
    this.populateImages();
  }

  populateImages() {
    let newArr = new Array<string>();
    for(let i = 0; i < this.indexes.length; i++) {
      newArr.push(this.album.imageArray[this.indexes[i]]);
    }
    this.visibleImages = newArr;
    console.log('new arr', this.visibleImages);
    this.changeImage(0);
  }
}
