import { NgModule } from '@angular/core';
import { SomethingComponent } from './something/something.component';
import { MatButtonModule } from '@angular/material/button';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CommonModule } from '@angular/common';
import { ScrollPageComponent } from './scroll-page/scroll-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AnimationNumberComponent } from './animation-number/animation-number.component';
import { FlyPlaneComponent } from './fly-plant/fly-plane.component';
import { MatIconModule } from '@angular/material/icon';
import { CoverAnimationComponent } from './cover-animation/cover-animation.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CookbookModule } from '../cookbook/cookbook.module';

@NgModule({
  declarations: [
    SomethingComponent,
    PokedexComponent,
    ScrollPageComponent,
    AnimationNumberComponent,
    FlyPlaneComponent,
    CoverAnimationComponent,
    CalculatorComponent,
  ],
  exports: [
    SomethingComponent,
    PokedexComponent,
    ScrollPageComponent,
    AnimationNumberComponent,
    FlyPlaneComponent,
    CoverAnimationComponent,
    CalculatorComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    CookbookModule,
  ],
})
export class GreenSockModule {}
