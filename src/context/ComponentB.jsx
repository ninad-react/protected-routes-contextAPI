import React, { useContext } from 'react'
import { stateContext } from './ContextDemo'

const ComponentB = () => {

    const { state, setState } = useContext(stateContext);

  return (
    <div>
        <p>Current state is: {state}</p>
        <button onClick={() => setState('updated state')}>
            Update State
        </button>
    </div>
  )
}

export default ComponentB