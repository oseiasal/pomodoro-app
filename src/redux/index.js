// import
import {createStore} from 'redux'
import { addItem } from './actions/index.js'

// const store = createStore(setMin)

// criar reducer
function reducerItem(state = {}, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, action);


    case 'REMOVE':
      return console.log(state); // temporario
    default:
     return state;
  }
}
