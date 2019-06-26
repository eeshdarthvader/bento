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
