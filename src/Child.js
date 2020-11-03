import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    return(
        <div>
            <h2>This is first child using Counter Context.</h2>
            <h3>Counter value is: {counterValue[0]}</h3>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increament Context
            </button>
        </div>
    )
}

export default Child;