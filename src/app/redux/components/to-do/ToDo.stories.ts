import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { ToDoComponent } from './to-do.component';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './NgRx/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const decoration = {
  declarations: [ToDoComponent],
  imports: [
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({
      todo: toDoReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
};

storiesOf('Redux', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('to do', () => ({
    component: ToDoComponent,
  }));
