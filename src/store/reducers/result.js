import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //concat returnes a copy of the array adding new
                results: state.results.concat({id: new Date(), value: action.value})
            }
        case actionTypes.DELETE_RESULT:

            const updatedArray = state.results.filter(el => el.id !== action.value)
            return {
                ...state,
                //concat returnes a copy of the array adding new
                results: updatedArray
            }
        default:
        break;
    }
    return state;
}

export default reducer;