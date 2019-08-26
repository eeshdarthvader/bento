import React, { useState, useEffect } from 'react';

import { isEmptyObject, stringToBoolean } from "../utils";



const Stringer = ({ code, inputs, children }) => {

  const [dynamicCode, setDynamicCode] = useState(code)
  const [switches, setSwitches] = useState({})

  useEffect(() => setSwitches({...switches, ...inputs}), [inputs]);
  useEffect(() => generateCodeString(), [switches]);

  const generatePropString = () => {
    const propStrings = []

    for (const key of Object.keys(switches)) {

      // If bool
      if (switches[key] === "true" || switches[key] === "false") {
        propStrings.push(`${key}={${stringToBoolean(switches[key])}}`)

        // if number
      } else if (Number.isInteger(Number(switches[key])) ) {
        propStrings.push(`${key}={${switches[key]}}`)

      // If string
      } else {
        propStrings.push(`${key}="${switches[key]}"`)
      }

    }

    const propString = propStrings.join(' ')
    return propString
  }

  // Detects if component is self-closing or not
  // <Badge /> vs <Badge>Hello</Badge>
  const isSelfClosing = () => {
    return code.slice(-2) === "/>"
  }

  // TODO: identify if self closing or not
  const generateCodeParts = () => {

    if (isSelfClosing()) {
      const splitString = code.split('/>')
      return splitString
    }

    // Split code string by first instance on '>'
    const splitString = code.split(/>(.+)/)
    return splitString
  }


  const generateCodeString = () => {
    if (isEmptyObject(switches)) return

    const propString = generatePropString()

    if (isSelfClosing()) {
      const codeParts = generateCodeParts()
      const firstHalf = [codeParts[0], propString].join(' ')
      const codeString = [firstHalf, codeParts[1]].join('/>')
      setDynamicCode(codeString)
      return
    }

    const codeParts = generateCodeParts()
    const firstHalf = [codeParts[0], propString].join(' ')
    const codeString = [firstHalf, codeParts[1]].join('>')
    setDynamicCode(codeString)

    return
  }

  return (
    <div {...switches}>
      {children(dynamicCode)}
    </div>
  );
}

export default Stringer;