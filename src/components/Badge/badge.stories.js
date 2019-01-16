import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from './';

storiesOf('Badge', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Default Badge</h3>
        <h4>
          A black color badges is used when there is no badge type specified
        </h4>
        <div className="demo">
          <Badge>Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Large Badge', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Large Badge</h3>
        <h4>
          Displays the badge in a bigger font size
        </h4>
        <div className="demo">
          <Badge size="large">Hello</Badge>
        </div>
      </div>
    </div>
  ))