import { combineReducers } from 'redux';
import alert from './alertReducer';
import status from './statusReducer';

export default combineReducers({
  alert,
  status,
});
