import * as Actions from './ActionTypes'

export const incrAction = () => {
    return (dispatch)=>{
        dispatch({
            type: Actions.INCR_ACTION
        });
    }


};

export const decrAction = () => {
    return (dispatch) => {
        dispatch({
            type: Actions.DECR_ACTION
        });
    }
};

export const addAction = () => {

    return (dispatch) => {
        dispatch({
            type: Actions.ADD_ACTION,
            value: 10
        });
    }
};


export const subtractAction = () => {
    return (dispatch) => {
        dispatch({
            type: Actions.SUB_ACTION,
            value: 10
        });
    }
}
