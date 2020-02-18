// import
import { reducerItem } from './reducerItem'
import { reducerTimer } from './reducerTimer'
import { combineReducers } from 'redux'

export const rootReducers = combineReducers({reducerItem, reducerTimer});

