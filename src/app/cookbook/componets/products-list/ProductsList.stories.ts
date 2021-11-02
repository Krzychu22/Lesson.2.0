import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { FoodInRecipe, FoodInterface } from '../../type';
import { foodsListStub, productsListStub } from '../../stubs';
import { ProductsListComponent } from './products-list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { action } from '@storybook/addon-actions';
import { FoodPipe } from '../../pipes/food.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const samplesProducts: Array<FoodInRecipe> = productsListStub;
const samplesFoods: Array<FoodInterface> = foodsListStub;
const actions = {
  edit: action('Product edit') as any,
  delete: action('Product delete') as any,
} as Partial<ProductsListComponent>;
const decoration = {
  declarations: [ProductsListComponent, FoodPipe],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
};

storiesOf('CookBook / Products / List', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Edit', () => ({
    props: {
      products: samplesProducts,
      foods: samplesFoods,
      allowEdit: true,
      ...actions,
    } as Partial<ProductsListComponent>,
    component: ProductsListComponent,
  }))
  .add('No edit', () => ({
    props: {
      products: samplesProducts,
      foods: samplesFoods,
    } as Partial<ProductsListComponent>,
    component: ProductsListComponent,
  }));
