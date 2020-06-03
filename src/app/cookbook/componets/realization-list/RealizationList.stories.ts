import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
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
import {RealizationListComponent} from './realization-list.component';
import {RecipeStep} from '../../type';
import {realizationsListStub} from '../../stubs';
import {DragDropModule} from '@angular/cdk/drag-drop';

const samples: Array<RecipeStep> = realizationsListStub;
const actions = {
  edit: action('Realization edit') as any,
  delete: action('Realization delete') as any,
  drop: action('Product drop') as any,

} as Partial<RealizationListComponent>;
const decoration = {

  declarations: [RealizationListComponent, FoodPipe],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule,
    BrowserAnimationsModule, DragDropModule]
};

storiesOf('CookBook / Realizations / List', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Edit', () => ({
    props: {
      realizations: samples,
      allowEdit: true,
      ...actions,
    } as Partial<RealizationListComponent>,
    component: RealizationListComponent
  })).add('No edit', () => ({
  props: {
    realizations: samples,
  } as Partial<RealizationListComponent>,
  component: RealizationListComponent
}));

