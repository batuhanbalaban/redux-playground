import * as actionTypes from './actionTypes';

const saveResult = (val) =>{
    return{
        type: actionTypes.STORE_RESULT, 
        value:val
    };
}

export const storeResult = (val) => {
    return dispatch => {
        setTimeout(() => {
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
