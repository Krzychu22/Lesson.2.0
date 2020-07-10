import {Allergies, FoodInRecipe, FoodInterface, HashtagInterface, RecipeInterface, RecipeStep} from './type';

export const recipeListStub: Array<RecipeInterface> = [{
  name: 'Pierwszy',
  recipeId: 'a',
  mealId: 'b',
  realization: [],
  components: [],
  like: false,
},
  {
    name: 'Drugi',
    recipeId: 'a1',
    mealId: 'b',
    realization: [],
    components: [],
    like: true,

  }, {
    name: 'trzeci',
    recipeId: 'a2',
    mealId: 'b',
    realization: [],
    components: [],
    like: false,
  }];
export const productsListStub: Array<FoodInRecipe> = [{
  amount: 10,
  foodId: 'a1',
  recipeId: 'a2',
}, {
  amount: 100,
  foodId: 'b1',
  recipeId: 'b2',
}, {
  amount: 1000,
  foodId: 'c1',
  recipeId: 'c2',
}, {
  amount: 10000,
  foodId: 'd1',
  recipeId: 'd2',
}];
export const foodsListStub: Array<FoodInterface> = [{
  name: 'pomidory',
  allergies: '',
  calories: 10,
  foodId: 'a1',
  unit: 'szt'
}, {
  name: 'mleko',
  allergies: '',
  calories: 20,
  foodId: 'b1',
  unit: 'ml'
}, {
  name: 'ryż',
  allergies: '',
  calories: 10,
  foodId: 'c1',
  unit: 'g'
}, {
  name: 'woda',
  allergies: '',
  calories: 0,
  foodId: 'd1',
  unit: 'ml'
}];
export const realizationsListStub: Array<RecipeStep> = [{
  content: 'Ugotuj',
  realizationId: 'a3',
  recipeId: 'a2',
}, {
  content: 'Obierz warzywa',
  realizationId: 'b3',
  recipeId: 'b2',
}, {
  content: 'Zagotuj wode',
  realizationId: 'c3',
  recipeId: 'c2',
}, {
  content: 'Usmaż rybe',
  realizationId: 'd3',
  recipeId: 'd2',
}];
export const allergiesListStub: Array<Allergies> = [{
  allergies: 'gluten',
}, {
  allergies: 'laktoza',
}, {
  allergies: 'orzechy',
}, {
  allergies: 'seler',
}];
export const hashtagListStub: Array<HashtagInterface> = [{
  hashtag: 'naleśniki',
  recipeId: 'b2',
}, {
  hashtag: 'obiadek',
  recipeId: 'b2',
}, {
  hashtag: 'zdrowe',
  recipeId: 'b2',
}, {
  hashtag: 'Ola lubi',
  recipeId: 'a2',
}, {
  hashtag: 'mniam',
  recipeId: 'b2',
}];
