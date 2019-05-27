import React from 'react';
import { storiesOf } from '@storybook/react';

import TA from './';

storiesOf('Trip Advisor', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Rating</h3>
        <h4>
          Default rating is a rating scale of 5
        </h4>
        <div className="demo">
          <TA
            rating={4}
          />
        </div>
      </div>
    </div>
  ))

  .add('Custom scale', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Custom scale</h3>
        <h4>
          Pass the `total` props to change scale
        </h4>
        <div className="demo">
          <Rating
            total={10}
            rating={4}
          />
        </div>
      </div>
    </div>
  ))

  .add('Change color', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Custom color</h3>
        <h4>
          Pass the `activeColor` props to change filled color
        </h4>
        <div className="demo">
          <Rating
            rating={2}
            activeColor='#3366cc'
          />
        </div>
      </div>
    </div>
  ))