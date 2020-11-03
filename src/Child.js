import React, { useContext } from 'react';
import counterContext from './CounterContext';

function Child(props) {
    
    let counterValue = useContext(counterContext);
    
    return (
    <div>
        <h1>My name is {props.name}</h1>
        <h2>This is a first child using Counter Context</h2>
        <h3>Counter value is: {counterValue[0]}</h3>

        <button onClick = {()=>counterValue[1](++counterValue[0])} >
            Increment Context
        </button>
        <button onClick = {()=>counterValue[1](--counterValue[0])} >
            Decrement Context
        </button>

    </div>
    )
}

export default Child;