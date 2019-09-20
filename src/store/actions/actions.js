export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';



export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (val) => {
    return {
        type: ADD, 
        value:val
    };
};

export const subtract = (val) => {
    return {
        type: SUBTRACT, 
        value:val
    };
};

const saveResult = (val) =>{
    return{
        type: STORE_RESULT, 
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
        type: DELETE_RESULT, 
        value:val
    };
};
