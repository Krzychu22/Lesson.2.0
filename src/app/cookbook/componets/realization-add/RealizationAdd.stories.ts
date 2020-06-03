import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {RealizationAddComponent} from './realization-add.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {action} from '@storybook/addon-actions';

const actions = {
  add: action('Product add') as any,
  change: action('Product change') as any,
} as Partial<RealizationAddComponent>;
const decoration = {

  declarations: [RealizationAddComponent],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule, FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Realizations / Make', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Add', () => ({
    props: {
      ...actions,
      allowEdit: true,
    } as Partial<RealizationAddComponent>,
    component: RealizationAddComponent
  })).add('Change', () => ({
  props: {
    ...actions,
    isEditRealization: true,
    allowEdit: true,
  } as Partial<RealizationAddComponent>,
  component: RealizationAddComponent
}));


