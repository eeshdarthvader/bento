import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from './';

storiesOf('Card', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const classes = text('Class Names', 'my-2 px-8 py-8 elevation-md')
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Default Card</h3>
        <h4>
          Default card has horizontal padding 32px and vertical padding 32px
        </h4>
        <div className="demo">
          <Card className={classes}>
              This is a card component
          </Card>
        </div>
      </div>
    </div>
    )
  })