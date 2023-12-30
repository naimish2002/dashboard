import { combineReducers } from 'redux';
import alert from './alertReducer';
import status from './statusReducer';
import post from './postReducer';

export default combineReducers({
  alert,
  status,
  post,
});
