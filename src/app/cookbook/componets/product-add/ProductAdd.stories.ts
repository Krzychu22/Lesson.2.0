import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {FoodInRecipe, FoodInterface} from '../../type';
import {foodsListStub, productsListStub} from '../../stubs';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FoodPipe} from '../../pipes/food.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {ProductAddComponent} from './product-add.component';
import {action} from '@storybook/addon-actions';

const samplesProducts: Array<FoodInRecipe> = productsListStub;
const samplesFoods: Array<FoodInterface> = foodsListStub;
const actions = {
  add: action('Product add') as any,
  change: action('Product change') as any,
} as Partial<ProductAddComponent>;
const decoration = {

  declarations: [ProductAddComponent, FoodPipe],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Products / Make', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Add', () => ({
    props: {
      products: samplesProducts,
      foods: samplesFoods,
      ...actions,
      allowEdit: true,
    } as Partial<ProductAddComponent>,
    component: ProductAddComponent
  }))
  .add('Change', () => ({
    props: {
      products: samplesProducts,
      foods: samplesFoods,
      ...actions,
      allowEdit: true,
      isEditFood: true,
    } as Partial<ProductAddComponent>,
    component: ProductAddComponent
  }));

