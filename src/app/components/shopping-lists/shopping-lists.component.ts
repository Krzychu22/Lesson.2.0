import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../../services/shopping-list.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {


  count$ = this.service.getAllTasks().pipe(map(allTasks => allTasks.length));

  constructor(private service: ShoppingListService) {
  }

  ngOnInit(): void {
  }

}
