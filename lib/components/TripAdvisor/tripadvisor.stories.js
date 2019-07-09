import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import TA from './';

storiesOf('Trip Advisor', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const rating = number('Rating', 3.5);
    const logo = boolean('Logo', true);
    const taLogoSize = number('TA logo size', 20);
    const reviewLogoSize = number('Round size', 17);
    // const taLogoSize = 
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Rating</h3>
          <h4>
            Default rating is a rating scale of 5
          </h4>
          <div className="demo">
            <TA
              rating = {rating}
              logo = {logo}
              taLogoSize = {taLogoSize}
              reviewLogoSize = {reviewLogoSize}
            />
          </div>
        </div>
      </div>
    )
  })
