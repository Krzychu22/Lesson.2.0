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
import {FoodsService} from '../../services/foods.service';
import {FoodsFakeService} from '../../services/foods.fake.service';
import {FoodPipe} from '../../pipes/food.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {FoodCreationComponent} from './food-creation.component';
import {FoodListComponent} from '../food-list/food-list.component';
import {FoodAddComponent} from '../food-add/food-add.component';
import {foodsListStub, productsListStub} from '../../stubs';

const actions = {
} as Partial<FoodCreationComponent>;
const decoration: NgModule = {

  declarations: [FoodCreationComponent, FoodPipe, FoodListComponent, FoodAddComponent],
  imports: [MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule,
    BrowserAnimationsModule, MatIconModule, MatButtonModule, MatMenuModule, DragDropModule, MatDialogModule],
  providers: [
    {
      provide: FoodsService,
      useClass: FoodsFakeService
    }
  ]
};

storiesOf('CookBook / Foods', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Edit', () => ({
    props: {
      foods: foodsListStub,
      allowEdit: true,
    } as Partial<FoodCreationComponent>,
    component: FoodCreationComponent
  }));
