import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Field,
  Select,
  Checkbox,
  Textarea
} from './';

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
  .add('Field with placeholder', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Field with Placeholder</h3>
        <h4>Placeholder is the default text contained within a field</h4>
        <div className="demo">
          <Field placeholder="This is the placeholder field" />
        </div>
      </div>
    </div>
  ))
  .add('Disabled Field', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Disabled Field</h3>
        <h4>A disabled field is immutable. The value cannot be changed</h4>
        <div className="demo">
          <Field disabled value="This field is disabled" />
        </div>
      </div>
    </div>
  ))
  .add('Field with error', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Field with error</h3>
        <h4>Used to show form validations and denote an error state</h4>
        <div className="demo">
          <Field value="This field has an error" hasError />
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

  .add('Checkbox', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Checkbox</h3>
        <h4>Checkbox element</h4>
        <div className="demo">
          <div>
            <Checkbox>Buy milk</Checkbox>
          </div>
        </div>
      </div>
    </div>
  ))

  .add('Textarea', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Textarea</h3>
        <h4>Text area</h4>
        <div className="demo">
          <div>
            <Textarea
              placeholder="Any additional request, travelling with senior citizens? Let us know"
            />
          </div>
        </div>
      </div>
    </div>
  ))