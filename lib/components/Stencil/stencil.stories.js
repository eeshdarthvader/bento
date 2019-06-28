import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Stencil from './';

storiesOf('Stencil', module)
  .addDecorator(jsxDecorator)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Stencil</h3>
        <h4>
          Use this to build placeholders
        </h4>
        <div className="demo">
          <Stencil
            height="200px"
            width="200px"
            shimmer={true}
          />
        </div>
      </div>
    </div>
  ))
