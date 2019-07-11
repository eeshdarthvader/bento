import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';

import Image from './';


storiesOf('Image', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const src = text('Image url', 'https://source.unsplash.com/random/400x400');
    const height = number('Height', 400);
    const width = number('Width', 400);
    const shimmer = boolean("Shimmer", true);
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Image Component</h3>
          <h4>
            An Image component with lazy loading
        </h4>
          <div className="demo">
            <Image
              onClick={action('image-click')}
              src={src}
              alt="alt"
              height={height}
              width={width}
              shimmer={shimmer}
            />
          </div>
        </div>
      </div>
    )
  })