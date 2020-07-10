import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs} from '@storybook/addon-knobs';
import {PhotoClickPointComponent} from './photo-click-point.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const actions = {} as Partial<PhotoClickPointComponent>;
const decoration = {

  declarations: [PhotoClickPointComponent],
  imports: [DragDropModule]
};

storiesOf('Zalamo', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('click', () => ({
    styles: [`
    app-photo-click-point{
      margin:100px;
      display:block;
    }
    `],
    template: '<p>asdasd</p>' +
      '<app-photo-click-point [selectedPoint]="true"></app-photo-click-point>',
    props: {
      selectedPoint: true,
    } as Partial<PhotoClickPointComponent>,
}))
.
add('on click', () => ({
  props: {
    selectedPoint: false,
  } as Partial<PhotoClickPointComponent>,
  component: PhotoClickPointComponent,
}));
