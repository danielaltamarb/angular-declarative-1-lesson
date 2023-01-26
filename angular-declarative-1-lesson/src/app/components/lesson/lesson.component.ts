import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-lesson',
  template: `'./lesson.component.html'`,
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
// this component is using the ItemsService to keep track of the number of items in stock
// and the map operator from the rxjs library to determine whether items can be purchased based
// on the number of items in stock.
  
itemsLeftInStock$ = this.itemsService.itemsInStock$;

canPurchase$ = this.itemsLeftInStock$.pipe(
  map((itemsLeftInStock:number) => (itemsLeftInStock > 0 ? true : false))
  );
constructor(private itemsService:ItemsService){}
  buyItem (){
    //updating itemsLeftInStock is handled by the observable now
  }
}
