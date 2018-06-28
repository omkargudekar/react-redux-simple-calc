import * as Actions from './ActionTypes'


export const saveAction = (currentResult) => {

    return (dispatch) => {
        dispatch({
            type: Actions.SAVE_ACTION,
            value: currentResult
        });
    }

};

export const deleteAction = (id) => {

    return (dispatch) => {
        dispatch({
            type: Actions.DELETE_ACTION,
            value: id
        });
    }
};
