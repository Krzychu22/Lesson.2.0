import {moduleMetadata, storiesOf} from '@storybook/angular';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {RecipeListComponent} from './recipe-list.component';
import {action} from '@storybook/addon-actions';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {RecipeInterface} from '../../type';
import {recipeListStub} from '../../stubs';

const samples: Array<RecipeInterface> = recipeListStub;
const actions = {
  picked: action('Recipe picked') as any,
  LikeDislike: action('Like and dislike recipe') as any,

} as Partial<RecipeListComponent>;
const decoration = {

  declarations: [RecipeListComponent],
  imports: [MatButtonModule, MatMenuModule, MatIconModule, BrowserAnimationsModule]
};

storiesOf('CookBook / Recipes / List / Empty', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Index', () => ({
    props: {recipes: []} as Partial<RecipeListComponent>,
    component: RecipeListComponent
  })).add('Search', () => ({
  props: {
    recipes: [],
    isSearch: true
  } as Partial<RecipeListComponent>,
  component: RecipeListComponent
}));

// @ts-ignore
storiesOf('CookBook / Recipes / List', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('Signle', () => ({
    props: {
      isPicker: boolean('Is picker', false),
      isCookInit: boolean('Is cook init', false),
      allowEdit: true,
      recipes: [samples[0]],
      ...actions,

    } as Partial<RecipeListComponent>,
    component: RecipeListComponent
  })).add('Many Picker', () => ({
  props: {
    isPicker: true,
    recipes: samples
  } as Partial<RecipeListComponent>,
  component: RecipeListComponent
})).add('Many Start Cooking', () => ({
  props: {
    isCookInit: true,
    recipes: samples,
    ...actions
  } as Partial<RecipeListComponent>,
  component: RecipeListComponent
})).add('Many with wery long name', () => ({
  props: {
    ...actions,
    recipes: [{
      name: 'Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy Pierwszy ',
      components: [],
      realization: [],
      mealId: 'asdasd',
      recipeId: ['asdasd']
    },
      ...samples
    ]
  } as Partial<RecipeListComponent>,
  component: RecipeListComponent
}));
