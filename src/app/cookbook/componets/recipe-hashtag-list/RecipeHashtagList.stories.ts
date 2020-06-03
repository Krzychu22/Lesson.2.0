import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {HashtagInterface} from '../../type';
import {hashtagListStub} from '../../stubs';
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
import {RecipeHashtagListComponent} from './recipe-hashtag-list.component';

const samplesHashtags: Array<HashtagInterface> = hashtagListStub;
const actions = {
  delete: action('Product delete') as any,
} as Partial<RecipeHashtagListComponent>;
const decoration = {

  declarations: [RecipeHashtagListComponent, FoodPipe],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Recipes / Hashtag / List', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)

  .add('Edit', () => ({
    props: {
      hashtags: samplesHashtags,
      ...actions,
      allowEdit: true,
    } as Partial<RecipeHashtagListComponent>,
    component: RecipeHashtagListComponent
  }))
  .add('NoEdit', () => ({
    props: {
      hashtags: samplesHashtags,
      ...actions,
    } as Partial<RecipeHashtagListComponent>,
    component: RecipeHashtagListComponent
  }));

