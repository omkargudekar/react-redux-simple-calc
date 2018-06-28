import React, { Component } from 'react';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import CurrentResultReducer from './store/Reducer/CurrentResultReducer'
import StoredResultReducer from './store/Reducer/StoredResultReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import './App.css';
import Calculator from './components/Calculator'

const rootReducer = combineReducers({
    currentResultReducerSlice: CurrentResultReducer,
    StoredResultReducerSlice: StoredResultReducer
});


const logMiddleware = (store)=>{
    return (next)=>{
      return (action)=>{
        console.log("[Log Middleware]",action.type," value",action.value);
        next(action);
      }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logMiddleware, thunk)));

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
