import React from 'react';
// https://www.codebeast.dev/react-forms-then-and-now/

import {
  Field,
  Select
} from '@lib'

import { dequote, useForm } from '../utils'

const Switcher = ({ prp, onPropChange}) => {

  const { handleInputChange } = useForm(onPropChange)

  return (
    <>
      { prp.type.name === 'string' &&
        <Field
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
    </>
  );
}

export default Switcher;