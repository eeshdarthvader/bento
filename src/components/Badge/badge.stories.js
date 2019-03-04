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

  
  .add('Primary', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Primary</h3>
        <h4>
          Displays primary badges -> bg-orange
        </h4>
        <div className="demo">
          <Badge size="large" type="primary">Hello</Badge>
        </div>
      </div>
    </div>
  ))


  .add('Secondary', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Primary</h3>
        <h4>
          Displays primary badges -> bg-blue
        </h4>
        <div className="demo">
          <Badge size="large" type="secondary">Hello</Badge>
        </div>
      </div>
    </div>
  ))

  .add('Success', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Success</h3>
        <h4>
          Displays success badges -> bg-green
        </h4>
        <div className="demo">
          <Badge size="large" type="success">Hello</Badge>
        </div>
      </div>
    </div>
  ))
  
  .add('Warning', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Light</h3>
        <h4>
          Displays warning badge -> bg-yellow
        </h4>
        <div className="demo">
          <Badge size="large" type="warning">Hello</Badge>
        </div>
      </div>
    </div>
  ))
  
  .add('Light', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Light</h3>
        <h4>
          Displays light color badge -> bg-white
        </h4>
        <div className="demo">
          <Badge size="large" type="light">Hello</Badge>
        </div>
      </div>
    </div>
  ))

 