import React from 'react';

import Switcher from './Switcher'

const Table = ({ compProps, onPropChange }) => {
  console.log(compProps);

  return (
    <>
        {compProps.map((prop, index) => {
          return (
            <div className="propRow" key={index}>
              <div className="flex flex-middle flex-between">
                <div>
                  <div className="flex flex-middle">
                    <p className="propName">{prop.name}{prop.required && <span className="c-error-500">*</span>}</p>
                    <code className="propCode">{prop.type.name}</code>
                  </div>
                  <p className="propDescription">
                    {prop.description.text}
                  </p>
                </div>
                <div className="propSwitcher">
                  <Switcher prp={prop} onPropChange={onPropChange} />
                </div>
              </div>
            </div>
          )
        })}
    </>
  );
}

export default Table;