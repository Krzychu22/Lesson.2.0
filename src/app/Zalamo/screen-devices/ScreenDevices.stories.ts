import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {ScreenDevicesComponent} from './screen-devices.component';

const actions = {} as Partial<ScreenDevicesComponent>;
const decoration = {

  declarations: [ScreenDevicesComponent],
  imports: []
};

storiesOf('Zalamo / screen', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('laptop', () => ({
    props: {
      laptop: true,
    } as Partial<ScreenDevicesComponent>,
    component: ScreenDevicesComponent,
  }))
  .add('ipad', () => ({
    props: {
      ipad: true,
    } as Partial<ScreenDevicesComponent>,
    component: ScreenDevicesComponent,
  }))
  .add('iphone', () => ({
    props: {
      iphone: true,
    } as Partial<ScreenDevicesComponent>,
    component: ScreenDevicesComponent,
  }))
  .add('all', () => ({
    props: {
      iphone: true,
      ipad: true,
      laptop: true,
    } as Partial<ScreenDevicesComponent>,
    component: ScreenDevicesComponent,
  }));
