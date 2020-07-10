export interface MealInterface {
  name: string;
  mealId: string;
}

export interface HashtagInterface {
  hashtag: string;
  recipeId: string;
}

export interface RecipeInterface {
  name: string;
  mealId: string;
  realization: Array<RecipeStep>;
  components: Array<FoodInRecipe>;
  recipeId: string;
  like: boolean;
}

export interface RecipeStep {
  recipeId: string;
  content: string;
  realizationId: string;
  time?: number;
}

export interface FoodInRecipe {
  foodId: string;
  recipeId: string;
  amount: number;
}

export interface FoodInterface {
  name: string;
  unit: string;
  calories: number;
  allergies: string;
  foodId: string;
}

export interface Allergies {
  allergies: string;
}
