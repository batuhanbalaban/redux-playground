const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case('INCREMENT'):
            //this is also another way of changing state immutably
            //can use Object.assign({},state); instead of distributing properties with ...prefix
            //remember this is not a deep clone either
            const newState = Object.assign({},state);
            newState.counter= state.counter + 1;
            return newState;
        case('DECREMENT'):
            return {
                ...state,
                counter: state.counter - 1
            }
        case('ADD'):
            return {
                ...state,
                counter: state.counter + action.value
            }
        case('SUBTRACT'):
            return {
                ...state,
                counter: state.counter -  action.value
            }
        case('STORE_RESULT'):
            return {
                ...state,
                //concat returnes a copy of the array adding new
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case('DELETE_RESULT'):

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