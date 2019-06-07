import React from 'react';
import { storiesOf } from '@storybook/react';

import ReadMore from './'

storiesOf('ReadMore', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Read more</h3>
        <h4>
          Truncating text to character count
        </h4>
        <div className="demo">
          <ReadMore
            className="fs-body-2"
            charLength={240}
          >
            Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum.
            Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum
            </ReadMore>
        </div>
      </div>
    </div>
  ))

