import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs';


import {
  Field,
  Select,
  Checkbox,
  Textarea,
  Label,
  Switcher,
  Spoon,
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
  .add('Switcher', () => {
    const isChecked = boolean('Checked', true)
    const activeColor = text('Active color', 'success-500')
    const size = select('Size', {
      default: '',
      lg: 'lg',
      md: 'md',
      sm: 'sm'
    })
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Switcher</h3>
          <h4>Switcher component default view </h4>
          <div className="demo">
            <div>
              <Switcher 
                checked={isChecked}
                onChange={action('button-click')}
                activeColor={activeColor}
                size={size}
              />
            </div>
          </div>
        </div>
      </div>
    )
  })

  .add('Spoon', () => {
    const disabled = boolean('Disabled', false);
    const buttonLabel = text('Button label', 'Button');
    const hasError = boolean('Has error', false);
    const placeholder = text('Placeholder', 'This is default spoon');
    const buttonClassName = text('Button classname', '');
    const fieldClassName = text('Field classname', '');
    const iconleft = text('Icon left', 'avatar-man')
    const iconright = text('Icon right', 'calendar')
    return (
    <div className="cont storybook">
      <div className="block">
        <h3>Spoon Component</h3>
        <h4>
          Default spoon component
        </h4>
        <div className="demo">
          <Spoon
            onClick={action('button-click')}
            buttonLabel = {buttonLabel}
            placeholder = {placeholder}
            disabled= {disabled}
            hasError= {hasError}
            buttonClassName= {buttonClassName}
            fieldClassName= {fieldClassName}
          />
        </div>
        <div className="block">
            <h4>Spoon with Icon left</h4>
            <div className="demo">
              <Spoon
                onClick={action('button-click')}
                buttonLabel = {buttonLabel}
                placeholder = {placeholder}
                disabled= {disabled}
                hasError= {hasError}
                buttonClassName= {buttonClassName}
                fieldClassName= {fieldClassName}
                iconleft={iconleft}
              />
            </div>
          </div>
          <div className="block">
            <h4>Spoon with Icon right</h4>
            <div className="demo">
                <Spoon
                  onClick={action('button-click')}
                  buttonLabel = {buttonLabel}
                  placeholder = {placeholder}
                  disabled= {disabled}
                  hasError= {hasError}
                  buttonClassName= {buttonClassName}
                  fieldClassName= {fieldClassName}
                  iconright={iconright}
              />
            </div>
          </div>
      </div>
    </div>
    )
  })

