import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './components/sample/sample.component';
import { StoreModule } from '@ngrx/store';
import { sampleReducer } from './components/sample/redux/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToDoComponent } from './components/to-do/to-do.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { ProductPipe } from './components/shopping-cart/shopping-cart/product.pipe';
import { ChangeNumberComponent } from './components/shopping-cart/changeNumber/change-number/change-number.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingInformationComponent } from './components/shopping-cart/shopping-cart/shoppingCart.stories';

@NgModule({
  declarations: [
    SampleComponent,
    ToDoComponent,
    ShoppingCartComponent,
    ProductPipe,
    LoadingInformationComponent,
    ChangeNumberComponent,
  ],
  exports: [
    SampleComponent,
    ToDoComponent,
    ShoppingCartComponent,
    ProductPipe,
    ChangeNumberComponent,
  ],
  imports: [
    DragDropModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
    StoreModule.forRoot({ sample: sampleReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class ReduxModule {}
