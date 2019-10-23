import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import Switch from './';

storiesOf('Switch', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const isOn = boolean('On', false)
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Switch</h3>
          <h4>
            Use to toggle between to states
        </h4>
          <div className="demo">
            <Switch
              isOn={isOn}
            />
          </div>
        </div>
      </div>
    )
  })
