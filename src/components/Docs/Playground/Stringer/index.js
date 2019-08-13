import React, { useState, useEffect } from 'react';

import { isEmptyObject } from "../utils";

// generate prop string

const Stringer = ({ code, inputs, children }) => {

  const [dynamicCode, setDynamicCode] = useState(code)
  const [switches, setSwitches] = useState({})

  useEffect(() => setSwitches({...switches, ...inputs}), [inputs]);
  useEffect(() => generatePropString(), [switches]);

  const generatePropString = () => {
    console.log(switches)
    if (isEmptyObject(switches)) return //
    setDynamicCode("<Badge>Hello Moto</Badge>")
    return
  }

  return (
    <div {...switches}>
      {children(dynamicCode)}
    </div>
  );
}

export default Stringer;