import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import ReadMore from './'

storiesOf('ReadMore', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const charLength = number('Char length', 200);
    const labelText = text('Label text', 'Read more');
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Read more</h3>
        <h4>
          Truncating text to character count
        </h4>
        <div className="demo">
          <ReadMore
            charLength = {300}
            className = "fs-body-2"
            labelText = {labelText}
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
    )
  })

