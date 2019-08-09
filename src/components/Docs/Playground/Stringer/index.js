import React from 'react';

// pass to function to generate prop string
// save every updated prop in state
// overwrite prop value if prop already exists
// "flatten" object to string

const Stringer = ({ code, switches, children }) => {

  console.log('From swithes', switches)

  // const [codes, setCodes] = useState("hello")
  const dynamicCode = code;

  return (
    <div>
      {children(dynamicCode)}
    </div>
  );
}

export default Stringer;