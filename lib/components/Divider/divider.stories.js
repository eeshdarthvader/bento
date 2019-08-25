import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import Divider from './';

storiesOf('Divider', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const textVal = text('With text', '')
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Default divider</h3>
        <h4>
          Default divider has a height of 1px and a 40% opacity of black as color
        </h4>
        <div className="demo">
          <Divider text={textVal}/>
        </div>
      </div>
    </div>
    )
  })