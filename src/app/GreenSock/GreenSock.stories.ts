import { moduleMetadata, storiesOf } from '@storybook/angular';
import { SomethingComponent } from './something/something.component';
import { GreenSockModule } from './greenSock.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { AnimationNumberComponent } from './animation-number/animation-number.component';
import { number, withKnobs } from '@storybook/addon-knobs';
import { FlyPlaneComponent } from './fly-plant/fly-plane.component';
import { CoverAnimationComponent } from './cover-animation/cover-animation.component';

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
    component: SomethingComponent,
  }))
  .add('Plane 1', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: { top: 30, left: 60 },
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent,
  }))
  .add('Plane 2', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: { top: 10, left: 40 },
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent,
  }))
  .add('Plane 3', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: { top: 80, left: 10 },
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent,
  }))
  .add('Plane 4', () => ({
    template: `<app-fly-plane [position]="position"></app-fly-plane>`,
    props: {
      position: { top: 70, left: 80 },
    } as Partial<FlyPlaneComponent>,
    component: FlyPlaneComponent,
  }))
  .add('Animation Number', () => ({
    template: `<app-animation-number style="width:400px; height:400px" [newNumber]="newNumber"></app-animation-number>`,
    props: {
      newNumber: number('nowa liczba', 50),
    } as Partial<AnimationNumberComponent>,
    component: AnimationNumberComponent,
  }));
storiesOf('GreenSock / Page', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Pokemon', () => ({
    template: `<app-pokedex></app-pokedex>`,
    props: {} as Partial<PokedexComponent>,
    component: PokedexComponent,
  }))
  .add('Scroll', () => ({
    template: `<app-scroll-page></app-scroll-page>`,
    props: {} as Partial<ScrollPageComponent>,
    component: ScrollPageComponent,
  }));
storiesOf('GreenSock / Page / Cover', module)
  .addDecorator(moduleMetadata(decoration))
  .add('Text', () => ({
    styles: [
      `
         div{
         margin: 100px;
         font-size: 30px;
         }`,
    ],

    template: `
<app-cover-animation [url]="url" [title]="title"></app-cover-animation><div>ipsum dolor sit amet, consectetur adipiscing elit.
Proin dapibus lobortis fringilla. Donec tincidunt accumsan pretium. Pellentesque eu arcu vel nisl posuere mattis. Vivamus a faucibus mi,
 sed facilisis velit. In nec condimentum turpis. Integer congue risus fringilla enim ultricies, et lacinia lectus vulputate.
  Nullam a pulvinar nisl. Proin id nunc non mauris scelerisque porttitor. In nunc diam, molestie nec neque a, faucibus finibus mauris.
   Nullam vulputate venenatis sem, quis commodo neque tempor eget. Cras id neque vitae risus iaculis feugiat id non nulla.
   Aliquam sollicitudin in lorem a ultricies.`,
    props: {
      url:
        'https://images.pexels.com/photos/4529074/pexels-photo-4529074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Integer eu rutrum slectus',
    } as Partial<CoverAnimationComponent>,
    component: CoverAnimationComponent,
  }))
  .add('Photo', () => ({
    styles: [
      `
    div{
    width: 100%;
    height: 100%;
    }
    img{
    margin-left: 25%;
    width: 50%;
    max-height: 50%
    }`,
    ],
    template: `
<app-cover-animation [url]="url" [title]="title"></app-cover-animation><div>
<img src="https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="x">
<p><img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="x"></p>
<p><img src="https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="x"></p>
<p><img src="https://images.pexels.com/photos/1214259/pexels-photo-1214259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="x"></p>
</div>`,
    props: {
      url:
        'https://images.pexels.com/photos/4529074/pexels-photo-4529074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Integer eu rutrum slectus',
    } as Partial<CoverAnimationComponent>,
    component: CoverAnimationComponent,
  }))
  .add('Photo and text', () => ({
    styles: [
      `
    div{
    margin: 100px;
    }
    img{
    float:right;
    width: 50%;
    max-height: 50%
    }`,
    ],
    template: `<app-cover-animation [url]="url" [title]="title"></app-cover-animation>
<img src="https://images.pexels.com/photos/1214259/pexels-photo-1214259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="x">
<div>ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lobortis fringilla. Donec tincidunt accumsan pretium.
Pellentesque eu arcu vel nisl posuere mattis. Vivamus a faucibus mi, sed facilisis velit. In nec condimentum turpis.
Integer congue risus fringilla enim ultricies, et lacinia lectus vulputate. Nullam a pulvinar nisl.
Proin id nunc non mauris scelerisque porttitor. In nunc diam, molestie nec neque a, faucibus finibus mauris.
Nullam vulputate venenatis sem, quis commodo neque tempor eget. Cras id neque vitae risus iaculis feugiat id non nulla.
Aliquam sollicitudin in lorem a ultricies.

Nunc eget euismod enim. Quisque eu eros at elit fringilla blandit.
Fusce viverra dolor erat, non imperdiet diam varius ut. Sed aliquet placerat viverra. Nullam molestie velit eu porta venenatis.
Aliquam erat volutpat. Nunc imperdiet vestibulum turpis, vitae finibus mi vestibulum ut. Mauris quis nulla dictum, vulputate eros in,
dapibus arcu. Pellentesque id ullamcorper dolor. Mauris porttitor ultrices nunc. Sed pretium porta velit sit amet gravida.
Aliquam efficitur ultrices ex vitae vehicula. Curabitur eleifend enim quis purus fringilla aliquam. Nunc dui sem, vestibulum non leo non,
tempus laoreet lacus.

Proin at sollicitudin lorem. Maecenas vel pellentesque ligula, quis sagittis nibh.</div>
<p><img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="x"></p>
<div>Integer eu rutrum lectus. In sit amet pretium felis. Duis aliquam et dui id sollicitudin. Proin ultricies molestie purus,
quis lobortis mauris lacinia sit amet. Aenean bibendum iaculis arcu ut tempus. Integer ultrices ex in porttitor iaculis.
Donec eu urna lobortis, egestas lacus quis, ornare sem. Etiam aliquet lobortis viverra. Aliquam maximus eu quam in viverra.
Morbi eget dui pretium, congue elit vitae, tincidunt ante. Nam lacinia felis tellus, a congue sapien dictum eu.
Sed non vehicula dui, ultrices consectetur nunc. Curabitur sollicitudin diam erat, eget vehicula arcu maximus eu.

Morbi consequat nisi ante, ac rhoncus enim feugiat tempor. Nullam vestibulum nisl sit amet vehicula accumsan.
Phasellus finibus lectus et lacus ultrices mattis. Vivamus hendrerit nisi vitae urna facilisis egestas.
Sed interdum erat sit amet enim malesuada ullamcorper. Morbi eleifend magna ut tristique vulputate. Vestibulum maximus laoreet leo.
Etiam euismod ipsum et tincidunt tempor. Fusce eu pulvinar orci, feugiat maximus eros. Suspendisse congue, lacus at ultrices tristique,
leo turpis scelerisque eros, quis pellentesque tortor quam sed quam.</div>
`,
    props: {
      url:
        'https://images.pexels.com/photos/4529074/pexels-photo-4529074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Integer eu rutrum slectus',
    } as Partial<CoverAnimationComponent>,
    component: CoverAnimationComponent,
  }));
