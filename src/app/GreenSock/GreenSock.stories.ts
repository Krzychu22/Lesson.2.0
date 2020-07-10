import {moduleMetadata, storiesOf} from '@storybook/angular';
import {SomethingComponent} from './something/something.component';
import {GreenSockModule} from './greenSock.module';
import {PokedexComponent} from './pokedex/pokedex.component';
import {object} from '@storybook/addon-knobs';


const decoration = {
  imports: [GreenSockModule],
  declarations: [],


};


storiesOf('GreenSock / Single element', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Car', () => ({
    template: `<app-something></app-something>`,
    props: {} as Partial<SomethingComponent>,
    component: SomethingComponent
  }));
storiesOf('GreenSock / Page', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Pokemon', () => ({
    template: `<app-pokedex></app-pokedex>`,
    props: {} as Partial<PokedexComponent>,
    component: PokedexComponent
  }));
