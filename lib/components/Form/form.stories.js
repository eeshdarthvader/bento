import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';


import {
  Field,
  Select,
  Checkbox,
  Textarea,
  Label,
  Toggle
} from './';

storiesOf('Form', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Field', () => {
    const placeholder = text('Place holder', 'This is default')
    const disabled = boolean('Disabled', false)
    const hasError = boolean('Has error', false)
    const iconleft = text('Icon left', 'calendar')
    const iconright = text('Icon right', 'call')
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Field</h3>
          <h4>Default field streches to take up 100% width of the available space</h4>
          <div className="demo">
            <Field
              placeholder={placeholder}
              disabled={disabled}
              hasError={hasError}
            />
          </div>
          <div className="block">
            <h4>Field with icon left</h4>
            <div className="demo">
              <Field
                placeholder={placeholder}
                disabled={disabled}
                hasError={hasError}
                iconleft={iconleft}
              />
            </div>
          </div>
          <div className="block">
            <h4>Field with icon right</h4>
            <div className="demo">

              <Field
                placeholder={placeholder}
                disabled={disabled}
                hasError={hasError}
                iconright={iconright}
              />
            </div>
          </div>
          <div className="block">
            <h4>Field with label</h4>
            <div className="demo">
              <Label for="demo">This is default label</Label>
              <Field
                placeholder={placeholder}
                disabled={disabled}
                hasError={hasError}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })

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

  .add('Textarea', () => {
    const height = number('Height', 160)

    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Textarea</h3>
          <h4>Text area</h4>
          <div className="demo">
            <div>
              <Textarea
                placeholder="Any additional request, travelling with senior citizens? Let us know"
                height={height}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })


  .add('Toggle', () => {

    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Toggle</h3>
          <h4>Toggle component default view </h4>
          <div className="demo">
            <div>
              <Toggle value="tab_2">
                <Toggle.Toggler value="tab_1">Tab 1</Toggle.Toggler>
                <Toggle.Toggler value="tab_2">Tab 2</Toggle.Toggler>
                <Toggle.Toggler value="tab_3"></Toggle.Toggler>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    )
  })