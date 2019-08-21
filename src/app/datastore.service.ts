import { Injectable } from '@angular/core';
import { collection } from '../assets/data/collection';
@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor() {

  }

  getAlbums() {
    return collection;
  }
}
