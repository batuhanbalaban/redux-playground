import * as actionTypes from './actionTypes';

const saveResult = (val) =>{
    return{
        type: actionTypes.STORE_RESULT, 
        value:val
    };
}

export const storeResult = (val) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log('Old Counter:',oldCounter);
            dispatch(saveResult(val));
        },2000);
    };
};

export const deleteResult = (val) => {
    return {
        type: actionTypes.DELETE_RESULT, 
        value:val
    };
};
