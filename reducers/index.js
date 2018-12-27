import {combineReducers} from 'redux';
import PropertiesReducer from './PropertiesReducer';
import PropertyReducer from './PropertyReducer';
import LoginReducer from './LoginReducer';


export default combineReducers({
  properties: PropertiesReducer,
  property: PropertyReducer,
  login: LoginReducer
})