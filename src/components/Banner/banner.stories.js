import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner from '.';

storiesOf('Banner', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Banner</h3>
        <h4>
          Used to display some useful information
        </h4>
        <div className="demo">
          <Banner label="Note:">
            <p>
              Updates and visas for all travellers will be sent to this email address
                  </p>
          </Banner>
        </div>
      </div>
    </div>
  ))