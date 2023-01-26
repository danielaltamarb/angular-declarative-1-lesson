import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // it is not good practice to use any, we use it for the sake of the lesson
  itemsInStock$:any;
  constructor() { }
}
