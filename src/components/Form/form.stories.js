import React from 'react';
import { storiesOf } from '@storybook/react';

import { Field, Select } from './';

storiesOf('Form', module)
  .add('Field', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Field</h3>
        <h4>Default field streches to take up 100% width of the available space</h4>
        <div className="demo">
          <Field/>
        </div>
      </div>
    </div>
  ))
  .add('Field with Icon', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Input Field with Icon</h3>
        <h4>Default field with an icon to the left or right</h4>
        <div className="demo">
          <Field
            iconleft="triangle-down"
          />
        </div>
        <div className="demo">
          <Field
            iconright="calendar"
          />
        </div>
      </div>
    </div>
  ))
  .add('Select', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Field</h3>
        <h4>Default field streches to take up 100% width of the available space</h4>
        <div className="demo">
          <Select>
            <option selected>Hello</option>
            <option>Ola!</option>
            <option>Bonjour</option>
            <option>Namaste</option>
          </Select>
        </div>
      </div>
    </div>
  ))