import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import Button from './';

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const type = select('Type', {
      default: '',
      secondary: 'secondary',
      primary: 'primary'
    })
    const size = select('Size', {
      default: '',
      lg: 'lg',
      md: 'md',
      sm: 'sm'
    })
    const disabled = boolean('Disabled', false)
    const full = boolean('Full', false)
    const outline = boolean('Outline', false)
    const children = text('Children', 'Hello')

    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Default Button</h3>
        <h4>
          Used in places where the intent is not defined
        </h4>
        <div className="demo">
          <Button 
            type= {type}
            size={size}
            disabled = {disabled}
            full={full}
            outline={outline}
            onClick={action('button-click')}>
            {children}
          </Button>
        </div>
      </div>
    </div>
    )
  })

  .add('Busy', () => {
    const busy = text('Busy','Busy..');
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Busy Button</h3>
        <h4>
          Denotes an busy or waiting states while the UI waits for a response. Disables the button while waiting.
        </h4>
        <div className="demo">
          <Button type="secondary" disabled busy={busy}>Hello</Button>
        </div>
      </div>
    </div>
    )
  })