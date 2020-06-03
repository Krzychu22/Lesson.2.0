import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FoodInRecipe, FoodInterface, HashtagInterface} from '../../type';
import {foodsListStub, hashtagListStub, productsListStub} from '../../stubs';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FoodPipe} from '../../pipes/food.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {action} from '@storybook/addon-actions';
import {RecipeHashtagAddComponent} from './recipe-hashtag-add.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const actions = {
  add: action('Product add') as any,
  result: action('Product result') as any,
} as Partial<RecipeHashtagAddComponent>;
const decoration = {

  declarations: [RecipeHashtagAddComponent, FoodPipe],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule, MatAutocompleteModule]
};

storiesOf('CookBook / Recipes / Hashtag', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Add', () => ({
    props: {
      hashtags: hashtagListStub,
      ...actions,
      allowEdit: true,
    } as Partial<RecipeHashtagAddComponent>,
    component: RecipeHashtagAddComponent
  }));

