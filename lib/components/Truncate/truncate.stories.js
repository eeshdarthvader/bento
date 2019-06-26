import React from 'react';
import { storiesOf } from '@storybook/react';

import Truncate from './';

storiesOf('Truncate', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Truncate</h3>
        <h4>
          Truncate to one line
        </h4>
        <div className="demo">
          <Truncate className="fs-body-2 c-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Truncate>
        </div>
      </div>
    </div>
  ))
