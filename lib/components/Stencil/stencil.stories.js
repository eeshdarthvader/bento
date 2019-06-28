import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import Stencil from './';

storiesOf('Stencil', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const width = number('Width', 200);
    const height = number('Height', 200);
    const shimmer = boolean('Shimmer', true)
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Stencil</h3>
          <h4>
            Use this to build placeholders
        </h4>
          <div className="demo">
            <Stencil
              height={height}
              width={width}
              shimmer={shimmer}
            />
          </div>
        </div>
      </div>
    )
  })
