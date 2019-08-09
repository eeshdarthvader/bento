import { useState, useEffect } from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});

  useEffect(() => callback(inputs), [inputs])

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return {
    handleInputChange,
    inputs
  };
}

export default useForm