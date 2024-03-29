import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import Callout from '.';

storiesOf('Callout', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const label = text('Label', 'Note')
    return (
      <div className="cont storybook">
      <div className="block">
        <h3>Callout</h3>
        <h4>
          Used to display some useful information
        </h4>
        <div className="demo">
          <Callout label="Note:">
            <p>
              Updates and visas for all travellers will be sent to this email address
            </p>
          </Callout>
        </div>
      </div>
    </div>
    )

  })