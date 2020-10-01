import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { ReduxModule } from '../../redux.module';
import { SampleComponent } from './sample.component';

const decoration = {
  imports: [ReduxModule],
  declarations: [],
};

storiesOf('Redux', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('sample', () => ({
    component: SampleComponent,
  }));
