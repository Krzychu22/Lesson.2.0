import {NgModule} from '@angular/core';
import {SomethingComponent} from './something/something.component';
import {MatButtonModule} from '@angular/material/button';
import { PokedexComponent } from './pokedex/pokedex.component';
import {CommonModule} from '@angular/common';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [SomethingComponent, PokedexComponent, ScrollPageComponent],
  exports: [SomethingComponent, PokedexComponent, ScrollPageComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],

})
export class GreenSockModule {
}
