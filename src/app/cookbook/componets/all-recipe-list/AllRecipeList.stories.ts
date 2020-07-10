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
import {NgModule} from '@angular/core';
import {action} from '@storybook/addon-actions';
import {RecipeHashtagListComponent} from '../recipe-hashtag-list/recipe-hashtag-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {AllRecipeListComponent} from './all-recipe-list.component';
import {MealService} from '../../services/meal.service';
import {MealFakeService} from '../../services/meal.fake.service';

const actions = {
  back: action('Back') as any,
} as Partial<AllRecipeListComponent>;
const decoration: NgModule = {

  declarations: [AllRecipeListComponent, RecipeHashtagListComponent],
  imports: [MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule,
    BrowserAnimationsModule, MatIconModule, MatButtonModule, MatMenuModule, DragDropModule, MatDialogModule, MatStepperModule, MatTabsModule],
  providers: [
    {
      provide: MealService,
      useClass: MealFakeService
    }
  ]};

storiesOf('CookBook / Full page', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('List recipe', () => ({
    props: {
      ...actions,
      allowEdit: true,
    } as Partial<AllRecipeListComponent>,
    component: AllRecipeListComponent
  }));
