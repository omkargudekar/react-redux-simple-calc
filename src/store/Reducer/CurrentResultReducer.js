const initialState={
    currentResult:0
}


const reducer = (state = initialState,action)=>{
    
    switch(action.type){
        case "ADD_ACTION":
                    return {
                        ...state,
                        currentResult: state.currentResult+action.value
                    }
        case "SUB_ACTION":
                    return {
                        ...state,
                        currentResult: state.currentResult - action.value
                    }
        case "INCR_ACTION":
                    return {
                        ...state,
                        currentResult: state.currentResult + 1
                    }
        case "DECR_ACTION":
                    return {
                        ...state,
                        currentResult: state.currentResult -1
                    }
        default:
            return state;
    }
    
}


export default reducer;





