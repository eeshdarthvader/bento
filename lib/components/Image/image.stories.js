import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Image from './';


storiesOf('Image', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Image Component</h3>
        <h4>
          An Image component with lazy loading
        </h4>
        <div className="demo">
          <Image
            onClick={action('image-click')}
            src="https://source.unsplash.com/random/400x400"
            alt="alt"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  ))