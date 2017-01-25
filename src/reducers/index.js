import { combineReducers } from 'redux';
import todos from './todosReducer';
import settings from './settingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  settings,
  routing: routerReducer
});

export default rootReducer;
