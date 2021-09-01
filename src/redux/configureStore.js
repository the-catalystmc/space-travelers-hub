import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

export const reducer = combineReducers({
  rockets: rocketsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
