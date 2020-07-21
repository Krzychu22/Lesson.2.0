import {NgModule} from '@angular/core';
import {SomethingComponent} from './something/something.component';
import {MatButtonModule} from '@angular/material/button';
import { PokedexComponent } from './pokedex/pokedex.component';
import {CommonModule} from '@angular/common';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AnimationNumberComponent } from './animation-number/animation-number.component';
import { FlyPlantComponent } from './fly-plant/fly-plant.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SomethingComponent, PokedexComponent, ScrollPageComponent, AnimationNumberComponent, FlyPlantComponent],
  exports: [SomethingComponent, PokedexComponent, ScrollPageComponent, AnimationNumberComponent, FlyPlantComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],

})
export class GreenSockModule {
}
