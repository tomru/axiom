import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from './navigation';
import schemes from './schemes';
import search from './search';

const rootReducer = combineReducers({
  routing: routerReducer,
  navigation,
  schemes,
  search,
});

export default rootReducer;
