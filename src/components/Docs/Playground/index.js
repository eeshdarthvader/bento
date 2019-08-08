import React from 'react';

import "./playground.scss";

import {
  Field,
  Select
} from '@lib'

const Playground = () => {
  return (
    <>
      <div className="propRow">
        <div className="flex flex-middle flex-between">
          <div>
            <div className="flex flex-middle">
              <p className="propName">className</p> <code>string</code>
            </div>
            <p className="propDescription">
              Classes to be added to the badge component
            </p>
          </div>
          <div className="propSwitcher">
            <Field />
          </div>
        </div>
      </div>

      <div className="propRow">
        <div className="flex flex-middle flex-between">
          <div>
            <div className="flex flex-middle">
              <p className="propName">size</p> <code>enum</code>
            </div>
            <p className="propDescription">
              These values modify the size of the component
            </p>
          </div>
          <div className="propSwitcher">
            <Select>
              <option defaultValue>md</option>
              <option>lg</option>
              <option>sm</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="propRow">
        <div className="flex flex-middle flex-between">
          <div>
            <div className="flex flex-middle">
              <p className="propName">type</p> <code>enum</code>
            </div>
            <p className="propDescription">
              Changes the appearance of the component
            </p>
          </div>
          <div className="propSwitcher">
            <Select>
              <option defaultValue>primary</option>
              <option>secondary</option>
              <option>light</option>
              <option>dark</option>
              <option>success</option>
              <option>warning</option>
            </Select>
          </div>
        </div>
      </div>

    </>
  );
}

export default Playground;