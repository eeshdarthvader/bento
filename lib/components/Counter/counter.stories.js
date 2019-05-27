import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Counter from './';

storiesOf('Counter', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Counter</h3>
        <h4>
          Used to step through a series of numbers. Handles disabling of click and disabled button state.
        </h4>
        <div className="demo">
          <Counter
            value={4}
            minValue={1}
            maxValue={10}
            onIncrement={action('increment value')}
            onDecrement={action('decrement value')}
          />
        </div>
      </div>
    </div>
  ))

  .add('Min Value', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Counter - Min</h3>
        <h4>
          When the value is the same as the min-value. The decrement button is disabled and does not trigger an onClick
        </h4>
        <div className="demo">
          <Counter
            value={1}
            minValue={1}
            maxValue={10}
            onIncrement={action('increment value')}
            onDecrement={action('decrement value')}
          />
        </div>
      </div>
    </div>
  ))

  .add('Max Value', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Counter - Max</h3>
        <h4>
          When the value is the same as the max-value. The increment button is disabled and does not trigger an onClick
        </h4>
        <div className="demo">
          <Counter
            value={10}
            minValue={1}
            maxValue={10}
            onIncrement={action('increment value')}
            onDecrement={action('decrement value')}
          />
        </div>
      </div>
    </div>
  ))