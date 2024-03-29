import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import Badge from './';


storiesOf('Badge', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const size = select('Size', {
      default: '',
      md: 'md',
      lg : 'lg',
      sm: 'sm'
    });
    const type = select('Type', {
      default: '',
      dark: 'dark',
      primary: 'primary',
      light: 'light',
      secondary: 'secondary',
      success: 'success',
      warning: 'warning',
      error: 'error'
    });
    const outline = boolean('Outline', false)
    const children = text("Children", 'Hello')
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Default Badge</h3>
          <h4>
            A black color badges is used when there is no badge type specified
        </h4>
          <div className="demo">
            <Badge
              size={size}
              type={type}
              outline={outline}
            >
                {children}
            </Badge>
          </div>
        </div>
      </div>
    )
  })
