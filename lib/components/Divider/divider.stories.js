import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './';

storiesOf('Divider', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Default divider</h3>
        <h4>
          Default divider has a height of 1px and a 40% opaicty of black as color
        </h4>
        <div className="demo">
          <Divider />
        </div>
      </div>
    </div>
  ))

  .add('With text', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Default divider</h3>
        <h4>
          Default divider has a height of 1px and a 40% opaicty of black as color
        </h4>
        <div className="demo">
          <Divider text="Layover 3h"/>
        </div>
      </div>
    </div>
  ))