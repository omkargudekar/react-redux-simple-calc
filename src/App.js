import React, { Component } from 'react';
import {createStore,combineReducers} from 'redux';
import CurrentResultReducer from './store/Reducer/CurrentResultReducer'
import StoredResultReducer from './store/Reducer/StoredResultReducer'
import {Provider} from 'react-redux'

import './App.css';
import Calculator from './components/Calculator'

const rootReducer = combineReducers({
    currentResultReducerSlice: CurrentResultReducer,
    StoredResultReducerSlice: StoredResultReducer
});
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          < Calculator/>
        </Provider>   
      </div>
    );
  }
}

export default App;
