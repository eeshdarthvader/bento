import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);

import '../src/scss/index.scss'
import './storybook.scss'

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);