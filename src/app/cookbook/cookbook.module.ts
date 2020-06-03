import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllCulinaryRecipesComponent} from './componets/all-culinary-recipes/all-culinary-recipes.component';
import {RouterModule} from '@angular/router';
import {MealComponent} from './componets/meal/meal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {RecipeComponent} from './componets/not-ready-recipe/recipe.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FoodsComponent} from './componets/foods/foods.component';
import {ReadyRecipeComponent} from './componets/ready-recipe/ready-recipe.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FoodPipe} from './pipes/food.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RecipeListComponent} from './componets/recipe-list/recipe-list.component';
import {RecipeSearchComponent} from './componets/recipe-search/recipe-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ListWithSearchComponent} from './componets/list-with-search/list-with-search.component';
import {ProductsListComponent} from './componets/products-list/products-list.component';
import {ProductAddComponent} from './componets/product-add/product-add.component';
import { RealizationAddComponent } from './componets/realization-add/realization-add.component';
import { RealizationListComponent } from './componets/realization-list/realization-list.component';
import { FoodAddComponent } from './componets/food-add/food-add.component';
import { FoodListComponent } from './componets/food-list/food-list.component';
import { RecipeCreationComponent } from './componets/recipe-creation/recipe-creation.component';
import { RecipeHashtagAddComponent } from './componets/recipe-hashtag-add/recipe-hashtag-add.component';
import { RecipeHashtagListComponent } from './componets/recipe-hashtag-list/recipe-hashtag-list.component';
import { FoodCreationComponent } from './componets/food-creation/food-creation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RecipeFinishedComponent } from './componets/recipe-finished/recipe-finished.component';


@NgModule({
  declarations: [AllCulinaryRecipesComponent, MealComponent, RecipeComponent, FoodsComponent, ReadyRecipeComponent, FoodPipe, RecipeListComponent, RecipeSearchComponent,
    ListWithSearchComponent, ProductsListComponent, ProductAddComponent, RealizationAddComponent, RealizationListComponent, FoodAddComponent, FoodListComponent,
    RecipeCreationComponent,
    RecipeHashtagAddComponent,
    RecipeHashtagListComponent,
    FoodCreationComponent,
    RecipeFinishedComponent],
  exports: [
    ListWithSearchComponent
  ],
  imports: [RouterModule.forChild([
    {
      component: AllCulinaryRecipesComponent,
      path: 'AllCulinaryRecipes'
    }, {
      component: MealComponent,
      path: 'Meal/:mealId'
    }, {
      component: RecipeComponent,
      path: 'NotReadyRecipe/:recipeId'
    }, {
      component: ReadyRecipeComponent,
      path: 'ReadyRecipe/:recipeId'
    }, {
      component: FoodsComponent,
      path: 'Foods'
    }, {
      component: FoodCreationComponent,
      path: 'FoodCreation'
    },
  ]),
    CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, MatIconModule, MatOptionModule, MatSelectModule,
    DragDropModule, MatStepperModule, MatCheckboxModule, MatAutocompleteModule, MatDialogModule
  ]
})
export class CookbookModule {
}

