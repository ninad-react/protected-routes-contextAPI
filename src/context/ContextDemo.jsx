import React, { useState, createContext } from 'react'
import ComponentA from './ComponentA';

export const stateContext = createContext();

const ContextDemo = () => {

    const [state, setState] = useState('initial state');

  return (
    <stateContext.Provider value={{state, setState}}>
        <ComponentA />
    </stateContext.Provider>
  )
}

export default ContextDemo