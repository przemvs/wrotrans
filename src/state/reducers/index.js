import {combineReducers} from 'redux'
import communicationReducer from './communication.reducer'

export default combineReducers({
  objects: communicationReducer
})
