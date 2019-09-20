import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (val) => {
    return {
        type: actionTypes.ADD, 
        value:val
    };
};

export const subtract = (val) => {
    return {
        type: actionTypes.SUBTRACT, 
        value:val
    };
};