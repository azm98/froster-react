import React  from 'react';
import {useDispatch} from 'react-redux'

function CounterInput(props) {
    const dispatch = useDispatch()
        return (
            <div>
                <button onClick={()=>dispatch({
                    type:'INCREMENT'
                })}>+</button>
                <button onClick={()=>dispatch({
                    type:'DECREMENT'
                })}>-</button>
            </div>
        );
}
export default CounterInput;