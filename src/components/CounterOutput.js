import React, { Component } from 'react'

function CounterOutput(props) {
    {console.log(props.counter)}
        return (
            <div>Counter Value : {props.counter}</div>
            
        );
}

export default CounterOutput;