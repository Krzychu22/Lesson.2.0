import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {action} from '@storybook/addon-actions';
import {RecipeHashtagListComponent} from '../recipe-hashtag-list/recipe-hashtag-list.component';
import {RecipeFinishedComponent} from './recipe-finished.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

const actions = {
  edit: action('Recipe edit') as any,
  back: action('Back') as any,
} as Partial<RecipeFinishedComponent>;
const decoration: NgModule = {

  declarations: [RecipeFinishedComponent, ProductsListComponent, RealizationListComponent, RecipeHashtagListComponent, FoodPipe],
  imports: [MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule,
    BrowserAnimationsModule, MatIconModule, MatButtonModule, MatMenuModule, DragDropModule, MatDialogModule, MatStepperModule, MatTabsModule],
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
  .add('Finished', () => ({
    props: {
      products: productsListStub,
      foods: foodsListStub,
      recipeId: 'a1',
      ...actions,
      allowEdit: true,
    } as Partial<RecipeFinishedComponent>,
    component: RecipeFinishedComponent
  }));
