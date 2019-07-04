import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import Rating from './';

storiesOf('Rating', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const rating = number('Rating', 4);
    const total = number('Total', 5);
    const activeColor = color('Active color', '#fec22d');
    const emptyColor = color('Empty color', '#e2e2e2');
    const size = number('Star size', 15);
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Rating</h3>
          <h4>
            Default rating is a rating scale of 5
          </h4>
          <div className="demo">
            <Rating
              total={total}
              rating={rating}
              size={size}
              activeColor={activeColor}
              emptyColor={emptyColor}
            />
          </div>
        </div>
      </div>
    )
  })