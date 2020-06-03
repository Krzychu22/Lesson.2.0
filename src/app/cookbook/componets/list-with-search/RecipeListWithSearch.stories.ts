import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {recipeListStub} from '../../stubs';
import {ListWithSearchComponent} from './list-with-search.component';
import {RecipeListComponent} from '../recipe-list/recipe-list.component';
import {RecipeSearchComponent} from '../recipe-search/recipe-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


const actions = {
  pickedRecipe: action('Recipe picked') as any,
  result: action('Search Results received') as any

} as Partial<ListWithSearchComponent>;
const decoration = {

  declarations: [ListWithSearchComponent, RecipeSearchComponent, RecipeListComponent],
  imports: [FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule, BrowserAnimationsModule, MatIconModule, MatButtonModule, MatMenuModule]
};

storiesOf('CookBook / Recipes / List with search', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('With Hints', () => ({
    props: {
      hasHints: true,
      recipes: recipeListStub,
      ...actions
    } as Partial<ListWithSearchComponent>,
    component: ListWithSearchComponent
  }));
