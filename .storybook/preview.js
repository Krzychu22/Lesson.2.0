
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {addParameters} from "@storybook/angular";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
