import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SelectPhotoPositionComponent} from './select-photo-position.component';

const actions = {} as Partial<SelectPhotoPositionComponent>;
const decoration = {

  declarations: [SelectPhotoPositionComponent],
  imports: [DragDropModule]
};

storiesOf('Zalamo / Edit photo / view/ Not set', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('square', () => ({
    props: {} as Partial<SelectPhotoPositionComponent>,
    template: `<app-select-photo-position [scalePhoto]="0.097" [x]="50" [y]="50" [heightPhoto]="3197" [widthPhoto]="2134" style="width: 200px; height: 200px"></app-select-photo-position>`
  }))
  .add('toll rectangle', () => ({
    props: {} as Partial<SelectPhotoPositionComponent>,
    template: `<app-select-photo-position [scalePhoto]="1" [x]="51" [y]="50" [heightPhoto]="3197" [widthPhoto]="2134" style="width: 350px; height: 200px"></app-select-photo-position>`
  }))
  .add('low rectangle', () => ({
    props: {} as Partial<SelectPhotoPositionComponent>,
    template: `<app-select-photo-position [scalePhoto]="1" [x]="50" [y]="69" [heightPhoto]="3197" [widthPhoto]="2134" style="width: 350px; height: 200px"></app-select-photo-position>`
  }))
  .add('low rectangle Eli', () => ({
    props: {} as Partial<SelectPhotoPositionComponent>,
    template: `<app-select-photo-position [scalePhoto]="1" [x]="45" [y]="35" [heightPhoto]="3197" [widthPhoto]="2134" style="width: 450px; height: 960px"></app-select-photo-position>`
  }))
  .add('low rectangle Kolejny', () => ({
    props: {} as Partial<SelectPhotoPositionComponent>,
    template: `<app-select-photo-position [scalePhoto]="1" [x]="9" [y]="90" [heightPhoto]="3197" [widthPhoto]="2134" style="width: 450px; height: 360px"></app-select-photo-position>`
  }));

