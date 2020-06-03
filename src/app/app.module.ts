import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SampleComponent} from './components/sample/sample.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {ChessComponent} from './components/chess/chess.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {TicTacToeComponent} from './components/tic-tac-toe/tic-tac-toe.component';
import {Tictactoe2Component} from './components/tictactoe2/tictactoe2.component';
import {TodoComponent} from './components/todo/todo.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ShoppingListsComponent} from './components/shopping-lists/shopping-lists.component';
import {SingleProjectViewComponent} from './components/todos/single-project-view.component';
import {ListTodoComponent} from './components/list-todo/list-todo.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RxjsComponent} from './components/rxjs/rxjs.component';
import {CookbookModule} from './cookbook/cookbook.module';
import { RecipeListViewComponent } from './views/recipe-list-view/recipe-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CalculatorComponent,
    ChessComponent,
    TicTacToeComponent,
    Tictactoe2Component,
    TodoComponent,
    ShoppingListComponent,
    ShoppingListsComponent,
    SingleProjectViewComponent,
    ListTodoComponent,
    ListTodoComponent,
    RxjsComponent,
    RecipeListViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      component: SampleComponent,
      path: 'sample'

    },
      {
        component: CalculatorComponent,
        path: 'calculator'
      },

      {
        component: ChessComponent,
        path: 'chess'
      },
      {
        component: TicTacToeComponent,
        path: 'tic-tac-toe'
      },
      {
        component: Tictactoe2Component,
        path: 'tic-tac-toe2'
      },
      {
        component: TodoComponent,
        path: 'todo/:projectId'
      },
      {
        component: SingleProjectViewComponent,
        path: 'todos'
      },
      {
        component: ShoppingListComponent,
        path: 'shopping'
      },
      {
        component: ShoppingListsComponent,
        path: 'lists'
      },
      {
        component: ListTodoComponent,
        path: 'ListTodo'
      }, {
        component: RxjsComponent,
        path: 'rxjs'
      }
    ]),
    MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule,

    FormsModule, DragDropModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatListModule, MatIconModule, MatMenuModule, CookbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
