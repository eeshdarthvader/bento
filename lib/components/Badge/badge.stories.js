import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Badge from './';


storiesOf('Badge', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const size = select('Size', {
      md: 'md',
      lg : 'lg'
    });
    const type = select('Type', {
      dark: 'dark',
      primary: 'primary',
      light: 'light',
      secondary: 'secondary', 
      success: 'success', 
      warning:'warning'
    });
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
              type={type}>
                Hello
            </Badge>
          </div>
        </div>
      </div>
    )
  })
