import React from 'react';
// https://www.codebeast.dev/react-forms-then-and-now/

import {
  Field,
  Select,
  Toggle
} from '@lib'

import { dequote, useForm } from '../utils'

const Switcher = ({ prp, onPropChange}) => {

  const { handleInputChange } = useForm(onPropChange)

  // No field in case of children prop
  if (prp.name === 'children') return '';

  return (
    <>
      { prp.type.name === 'string' &&
        <Field
          name={prp.name}
          onChange={handleInputChange}
          defaultValue={dequote(prp.defaultValue.value)}
        />
      }
      {prp.type.name === 'number' &&
        <Field
          type="number"
          name={prp.name}
          onChange={handleInputChange}
          defaultValue={dequote(prp.defaultValue.value)}
        />
      }
      {prp.type.name === 'enum' &&
        <Select
          name={prp.name}
          onChange={handleInputChange}
          defaultValue={dequote(prp.defaultValue.value)}
        >
          {prp.type.value.map((val, i) => {
            return (
              <option
                key={i}
                value={dequote(val.value)}
              >
                {dequote(val.value)}
              </option>
            )
          })}
        </Select>
      }

      {prp.type.name === "bool" &&
        <Toggle
          name={prp.name}
          value={prp.defaultValue.value}
          onChange={handleInputChange}
        >
          <Toggle.Toggler value="true">
            True
          </Toggle.Toggler>
          <Toggle.Toggler value="false">
            False
          </Toggle.Toggler>
        </Toggle>
      }
    </>
  );
}

export default Switcher;