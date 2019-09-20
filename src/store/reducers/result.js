import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actionTypes.STORE_RESULT:
                return updateObject(state,{results: state.results.concat({id: new Date(), value: action.value})});
        case actionTypes.DELETE_RESULT:
                return updateObject(state,{results: state.results.filter(el => el.id !== action.value)});
        default:
        break;
    }
    return state;
}

export default reducer;