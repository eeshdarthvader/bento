import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from './';

storiesOf('Badge', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Default Badge</h3>
        <h4>
          A black color badges is used when there is no badge type specified
        </h4>
        <div className="demo">
          <Badge>Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Large Badge', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Large Badge</h3>
        <h4>
          Displays the badge in a bigger font size
        </h4>
        <div className="demo">
          <Badge size="large">Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Primary Badge', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Primary</h3>
        <h4>
          Displays the badge in a bigger font size
        </h4>
        <div className="demo">
          <Badge size="large" intent="primary">Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Success Badge', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Success</h3>
        <h4>
          Displays the badge in a bigger font size
        </h4>
        <div className="demo">
          <Badge size="large" intent="success">Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Light Badge', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Light</h3>
        <h4>
          Displays the badge in a bigger font size
        </h4>
        <div className="demo">
          <Badge size="large" intent="light">Hello</Badge>
        </div>
      </div>
    </div>
  ))