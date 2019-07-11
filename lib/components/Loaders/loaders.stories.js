import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, text, color } from '@storybook/addon-knobs';

import { Spinner, Dots } from './';

storiesOf('Loaders', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)

  .add('Spinner', () => {
    const width = number('Width', 40);
    const height = number('Height', 40);
    const spinnerColor = color('Color', '#6e7278')

    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Spinner</h3>
          <h4>
            A spinning loader
        </h4>
          <div className="demo">
            <Spinner
              width={width}
              height={height}
              color={spinnerColor}
            />
          </div>
        </div>
      </div>
    )
  })

  .add('Dots', () => {
    const width = number('Width', 8);
    const height = number('Height', 8);
    const DotsColor = color('Color', '#6e7278')

    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Dots</h3>
          <h4>
            A rotating dots spinner
        </h4>
          <div className="demo">
            <Dots
              width={width}
              height={height}
              color={DotsColor}
            />
          </div>
        </div>
      </div>
    )
  })
