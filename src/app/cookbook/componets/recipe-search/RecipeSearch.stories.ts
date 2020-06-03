import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {RecipeSearchComponent} from './recipe-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {recipeListStub} from '../../stubs';


const actions = {
  pickedRecipe: action('Recipe picked') as any,
  result: action('Search Results received') as any

} as Partial<RecipeSearchComponent>;
const decoration = {

  declarations: [RecipeSearchComponent],
  imports: [FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Recipes / Search / Empty', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('With Hints', () => ({
    props: {
      hasHints: true,
      recipes: recipeListStub,
      ...actions
    } as Partial<RecipeSearchComponent>,
    component: RecipeSearchComponent
  })).add('Without Hints', () => ({
  props: {
    hasHints: false,
    recipes: recipeListStub,
    ...actions
  } as Partial<RecipeSearchComponent>,
  component: RecipeSearchComponent
}));
