import {NgModule} from '@angular/core';
import {SomethingComponent} from './something/something.component';
import {MatButtonModule} from '@angular/material/button';
import { PokedexComponent } from './pokedex/pokedex.component';
import {CommonModule} from '@angular/common';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';

@NgModule({
  declarations: [SomethingComponent, PokedexComponent, ScrollPageComponent],
  exports: [SomethingComponent, PokedexComponent],
  imports: [
    MatButtonModule,
    CommonModule
  ],

})
export class GreenSockModule {
}
