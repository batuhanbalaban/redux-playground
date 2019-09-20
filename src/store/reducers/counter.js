import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionTypes.INCREMENT:
            //this is also another way of changing state immutably
            //can use Object.assign({},state); instead of distributing properties with ...prefix
            //remember this is not a deep clone either
            const newState = Object.assign({},state);
            newState.counter= state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter -  action.value
            }
        default:
        break;
    }
    return state;
}

export default reducer;