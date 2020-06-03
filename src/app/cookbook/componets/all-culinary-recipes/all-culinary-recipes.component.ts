import {Component, OnInit} from '@angular/core';
import {MealInterface} from '../../type';
import {Observable} from 'rxjs';
import {AllCulinaryRecipesService} from '../../services/all-culinary-recipes.service';


@Component({
  selector: 'app-all-culinary-recipes',
  templateUrl: './all-culinary-recipes.component.html',
  styleUrls: ['./all-culinary-recipes.component.scss']
})
export class AllCulinaryRecipesComponent implements OnInit {

  meals$: Observable<Array<MealInterface>> = this.culinaryService.meals$;

  constructor(private culinaryService: AllCulinaryRecipesService) {

  }


  ngOnInit(): void {
  }

}
