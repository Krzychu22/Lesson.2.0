import {moduleMetadata, storiesOf} from '@storybook/angular';
import {SomethingComponent} from './something/something.component';
import {GreenSockModule} from './greenSock.module';
import {PokedexComponent} from './pokedex/pokedex.component';
import {ScrollPageComponent} from './scroll-page/scroll-page.component';


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
storiesOf('GreenSock / Page', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Scroll', () => ({
    template: `<app-scroll-page></app-scroll-page>`,
    props: {} as Partial<ScrollPageComponent>,
    component: ScrollPageComponent
  }));
