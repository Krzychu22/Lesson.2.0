import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FoodInterface} from '../../type';
import {foodsListStub} from '../../stubs';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {action} from '@storybook/addon-actions';
import {FoodPipe} from '../../pipes/food.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FoodListComponent} from './food-list.component';

const samplesFoods: Array<FoodInterface> = foodsListStub;
const actions = {
  edit: action('Product edit') as any,
  delete: action('Product delete') as any,
} as Partial<FoodListComponent>;
const decoration = {

  declarations: [FoodListComponent],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Foods / List', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Edit', () => ({
    props: {
      foods: samplesFoods,
      allowEdit: true,
      ...actions,
    } as Partial<FoodListComponent>,
    component: FoodListComponent
  }))
  .add('No edit', () => ({
    props: {
      foods: samplesFoods,
    } as Partial<FoodListComponent>,
    component: FoodListComponent
  }));
