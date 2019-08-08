import React from 'react';

import {
  Field,
  Select
} from '@lib'

import { dequote } from '../utils'

const Switcher = ({prp}) => {
  return (
    <>
      { prp.type.name === 'string' &&
        <Field defaultValue={dequote(prp.defaultValue.value)} />
      }
      {prp.type.name === 'enum' &&
        <Select defaultValue={dequote(prp.defaultValue.value)}>
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