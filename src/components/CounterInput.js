import React, { Component } from 'react'

function CounterInput(props) {

        return (
            <div>
                <button onClick={()=>props.setcounter(props.counter + 1)}>+</button>
                <button onClick={()=>props.setcounter(props.counter - 1)}>-</button>
            </div>
        );
}
export default CounterInput;