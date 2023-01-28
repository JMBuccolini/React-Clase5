import { TYPES } from "../actions/action";


 const initialState = {counter: 0};


 function reducer(state,action){
    switch (action.type) {
        case TYPES.incrementar:
            return {counter: state.counter + 1};
        
        case TYPES.decrementar:
            return {counter: state.counter - 1};
        
        case TYPES.incrementar2:
            return {counter: state.counter + action.payload};
        
        case TYPES.decrementar2:
            return {counter: state.counter - action.payload};
        
        case TYPES.reiniciar:
            return initialState
        default:
            return state;
       
    }
}   

export {initialState, reducer}



