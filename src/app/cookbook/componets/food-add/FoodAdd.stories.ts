import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {Allergies, FoodInterface} from '../../type';
import {allergiesListStub, foodsListStub} from '../../stubs';
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
import {FoodAddComponent} from './food-add.component';

const samplesFoods: Array<FoodInterface> = foodsListStub;
const samplesAllergies: Array<Allergies> = allergiesListStub;
const actions = {
  add: action('Product add') as any,
  change: action('Product change') as any,
} as Partial<FoodAddComponent>;
const decoration = {

  declarations: [FoodAddComponent, FoodPipe],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Foods / Make', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Add', () => ({
    props: {
      foods: samplesFoods,
      allergies: samplesAllergies,
      ...actions,
    } as Partial<FoodAddComponent>,
    component: FoodAddComponent
  }))
  .add('Change', () => ({
    props: {
      foods: samplesFoods,
      allergies: samplesAllergies,
      ...actions,
      isEditFood: true,
    } as Partial<FoodAddComponent>,
    component: FoodAddComponent
  }));

