import {moduleMetadata, storiesOf} from '@storybook/angular';
import {SomethingComponent} from './something/something.component';
import {GreenSockModule} from './greenSock.module';
import {PokedexComponent} from './pokedex/pokedex.component';
import {ScrollPageComponent} from './scroll-page/scroll-page.component';
import {AnimationNumberComponent} from './animation-number/animation-number.component';
import {number, withKnobs} from '@storybook/addon-knobs';
import {FlyPlantComponent} from './fly-plant/fly-plant.component';


const decoration = {
  imports: [GreenSockModule],
  declarations: [],


};


storiesOf('GreenSock / Single element', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Car', () => ({
    template: `<app-something></app-something>`,
    props: {} as Partial<SomethingComponent>,
    component: SomethingComponent
  }))
  .add('Plane', () => ({
    template: `<app-fly-plant></app-fly-plant>`,
    props: {} as Partial<FlyPlantComponent>,
    component: FlyPlantComponent
  }))
  .add('Animation Number', () => ({
    template: `<app-animation-number style="width:400px; height:400px" [newNumber]="newNumber"></app-animation-number>`,
    props: {
      newNumber: number('nowa liczba', 50)
    } as Partial<AnimationNumberComponent>,
    component: AnimationNumberComponent
  }));
storiesOf('GreenSock / Page', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Pokemon', () => ({
    template: `<app-pokedex></app-pokedex>`,
    props: {} as Partial<PokedexComponent>,
    component: PokedexComponent
  }))
  .add('Scroll', () => ({
    template: `<app-scroll-page></app-scroll-page>`,
    props: {} as Partial<ScrollPageComponent>,
    component: ScrollPageComponent
  }));
