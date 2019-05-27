import { configure } from '@storybook/react';

const req = require.context('../lib', true, /\.stories\.js$/);

import '../lib/scss/index.scss'
import './storybook.scss'

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);