import {moduleMetadata, storiesOf} from '@storybook/angular';
import {SomethingComponent} from './something/something.component';
import {GreenSockModule} from './greenSock.module';
import {PokedexComponent} from './pokedex/pokedex.component';
import {ScrollPageComponent} from './scroll-page/scroll-page.component';
import {AnimationNumberComponent} from './animation-number/animation-number.component';
import {number, withKnobs} from '@storybook/addon-knobs';
import {FlyPlaneComponent} from './fly-plant/fly-plane.component';


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
  .add('Plane 1', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: {top: 30, left: 60},
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent
  }))
  .add('Plane 2', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: {top: 10, left: 40},
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent
  }))
  .add('Plane 3', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: {top: 80, left: 10},
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent
  }))
  .add('Plane 4', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: {top: 70, left: 80},
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent
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
