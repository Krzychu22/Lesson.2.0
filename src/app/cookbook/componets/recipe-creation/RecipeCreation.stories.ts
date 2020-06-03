import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RecipeCreationComponent} from './recipe-creation.component';
import {ProductAddComponent} from '../product-add/product-add.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {foodsListStub, productsListStub} from '../../stubs';
import {NgModule} from '@angular/core';
import {FoodsService} from '../../services/foods.service';
import {FoodsFakeService} from '../../services/foods.fake.service';
import {ProductsListComponent} from '../products-list/products-list.component';
import {FoodPipe} from '../../pipes/food.pipe';
import {RecipeService} from '../../services/recipe.service';
import {RecipeFakeService} from '../../services/recipe.fake.service';
import {RealizationListComponent} from '../realization-list/realization-list.component';
import {RealizationAddComponent} from '../realization-add/realization-add.component';
import {action} from '@storybook/addon-actions';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RecipeHashtagAddComponent} from '../recipe-hashtag-add/recipe-hashtag-add.component';
import {RecipeHashtagListComponent} from '../recipe-hashtag-list/recipe-hashtag-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FoodCreationComponent} from '../food-creation/food-creation.component';
import {FoodAddComponent} from '../food-add/food-add.component';
import {FoodListComponent} from '../food-list/food-list.component';

const actions = {
  add: action('Recipe add') as any,
  saveRecipe: action('Recipe save') as any,
  back: action('back') as any,
} as Partial<RecipeCreationComponent>;
const decoration: NgModule = {

  declarations: [RecipeCreationComponent, ProductAddComponent, ProductsListComponent, RealizationAddComponent, RealizationListComponent,
    RecipeHashtagAddComponent, RecipeHashtagListComponent, FoodPipe, FoodCreationComponent, FoodAddComponent, FoodListComponent],
  imports: [MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule,
    BrowserAnimationsModule, MatIconModule, MatButtonModule, MatMenuModule, DragDropModule, MatDialogModule],
  providers: [
    {
      provide: FoodsService,
      useClass: FoodsFakeService
    }, {
      provide: RecipeService,
      useClass: RecipeFakeService
    },
  ]
};

storiesOf('CookBook / One recipe', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Edit', () => ({
    props: {
      products: productsListStub,
      foods: foodsListStub,
      recipeId: 'a1',
      ...actions,
      allowEdit: true,
    } as Partial<RecipeCreationComponent>,
    component: RecipeCreationComponent
  }));
