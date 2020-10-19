import * as actionTypes from '.actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGEDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGEDIENT,
        ingredientName: name
    };
};