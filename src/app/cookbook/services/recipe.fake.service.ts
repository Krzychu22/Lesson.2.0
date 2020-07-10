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
    content: 'Lorem ipsum dolor sit amet eleifend adipiscing metus. Curabitur ut nulla ante, tincidunt eget, facilisis nisl urna ut justo sem, accumsan at, convallis justo. Praesent quis orci. Mauris mattis metus gravida pulvinar. Donec faucibus quis, blandit eros, sit amet ipsum ac lacinia erat. Vestibulum quam. Nam risus libero, posuere eu.'
  }, {
    realizationId: '1b',
    recipeId: 'a1',
    content: 'Lorem ipsum dolor sit amet nibh. Aliquam erat sed augue. Nulla vestibulum sapien, ornare lorem. Nam pharetra pede. Etiam dapibus tellus. Morbi fermentum a, sodales lectus ut leo non eros pellentesque quis, bibendum eget, dictum est, volutpat eu, urna. Nunc mollis. Sed nonummy sodales felis, volutpat eu, semper magna nec diam. Morbi sodales in, dapibus aliquam. Etiam vestibulum vehicula. Nunc semper, quam molestie mollis vel, consectetuer tincidunt in, volutpat a, elementum orci luctus et felis non enim. Nam sed turpis. Curabitur placerat, nisl tristique id, congue dolor. Vivamus imperdiet convallis. Cras dignissim. Pellentesque mollis nunc iaculis ut, dolor. Duis sed.'
  }, {
    realizationId: '1c',
    recipeId: 'a1',
    content: 'Lorem ipsum dolor sit amet augue. Cum sociis natoque penatibus et eros diam eu libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per conubia nostra, per inceptos hymenaeos. Sed ac risus. Phasellus vulputate wisi id wisi quis pellentesque vel, lacinia at, velit. Cras magna ut orci dui, in quam felis eget augue sed enim. Mauris vitae massa at ultrices posuere in, suscipit lectus. Curabitur nec augue. Sed a mi. Nam lacus. Maecenas imperdiet wisi. Sed diam vel massa. Mauris ut tellus dolor gravida massa non porta neque, vitae lectus nulla eu ipsum. Aliquam tempor scelerisque, ligula in enim dictum wisi sapien vitae ornare id, libero. Duis porttitor ullamcorper, enim eget sapien. Cras interdum eu, sem. Mauris sit amet, pretium erat eu nunc. Suspendisse et magnis dis parturient montes, nascetur ridiculus mus. Fusce quam sed metus. Curabitur condimentum nec, eros. Nullam iaculis quis, faucibus gravida non, iaculis malesuada.'
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

