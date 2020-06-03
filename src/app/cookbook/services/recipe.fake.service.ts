import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HashtagInterface, RecipeStep} from '../type';
@Injectable({
  providedIn: 'root'
})
export class RecipeFakeService extends RecipeService {
  realization$ = new BehaviorSubject<Array<RecipeStep>>([{
    realizationId: '1a',
    recipeId: 'a1',
    content: 'ugotować'
  }, {
    realizationId: '1b',
    recipeId: 'a1',
    content: 'podpiecz'
  }, {
    realizationId: '1c',
    recipeId: 'a1',
    content: 'zagotuj'
  }, {
    realizationId: '1d',
    recipeId: 'b1',
    content: 'zjedz'
  }, {
    realizationId: '1e',
    recipeId: 'b1',
    content: 'Wcinaj'
  }
  ]);
  hashtag$ = new BehaviorSubject<Array<HashtagInterface>>([{
    hashtag: 'genialne to mało powiedzine',
    recipeId: 'a1'
  }, {
    hashtag: 'wyśmienite',
    recipeId: 'a1'
  }, {
    hashtag: 'naleśniki',
    recipeId: 'a1'
  }, {
    hashtag: 'mniam',
    recipeId: 'a1'
  }, {
    hashtag: 'Ola uwielbia bardzo wcinać',
    recipeId: 'a1'
  }]);
}

import {RecipeService} from './recipe.service';

