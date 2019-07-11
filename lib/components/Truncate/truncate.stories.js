import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import Truncate from './';

storiesOf('Truncate', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const width = text('Width', '100%')
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Truncate</h3>
        <h4>
          Truncate to one line
        </h4>
        <div className="demo">
          <Truncate className="fs-body-2 c-black" width={width}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Truncate>
        </div>
      </div>
    </div>
    )
  })
