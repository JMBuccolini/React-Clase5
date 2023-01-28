import React from "react";
import { useReducer } from "react";
import { TYPES } from '../actions/action.js';
import {reducer, initialState} from '../reducer/reducer.js';
function Counter(){

    
    const [state,dispatch] = useReducer(reducer,initialState)
    
    
    const sumar1 = ()=>dispatch({type: TYPES.incrementar});
    const restar1 = ()=>dispatch({type: TYPES.decrementar});
    const sumar2 = ()=>dispatch({type: TYPES.incrementar2, payload : 2});
    const restar2 = ()=>dispatch({type: TYPES.decrementar2, payload : 2});
    const reset = ()=>dispatch({type:TYPES.reiniciar});
    



    return( 
        <div>
            <h1>Contador en React</h1>
            <p>{state.counter}</p>
            <button onClick={sumar1}>Sumar 1</button>
            <button onClick={restar1}>Restar 1</button>
            <button onClick={sumar2}>Sumar 2</button>
            <button onClick={restar2}>Restar 2</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    )
}

export default Counter;