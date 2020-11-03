import React from 'react';
import Child from './Child';
import Child1 from './Child1';

function Parent(props) {
    return (
        <div>
            <Child name={props.name} />
            <Child1/>
        </div>
    )
}

export default Parent;
