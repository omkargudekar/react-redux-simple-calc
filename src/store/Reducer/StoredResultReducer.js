const initialState = {
    storedResults:[]
}

const reducer = (state = initialState, action) => {
    let newStoredResults=[];
    switch (action.type) {
        
        case "SAVE_ACTION":
            newStoredResults=[...state.storedResult];
            newStoredResults.push({value:action.value,id:action.id})
            return {
                ...state,
                storedResults: newStoredResults
            }
        case "DELETE_ACTION":
            let toDeleteId=action.value;
            newStoredResults = state.storedResults.filter((val) => val.id !== toDeleteId);
            return {
                ...state,
                storedResults: newStoredResults
            }
        default:
          return state;
    }

  
}

export default reducer;

