import { combineReducers, Reducer } from 'redux';

import { RootState } from '../store/configureStore';
import countReducer from './counter';

const reducer: Reducer<RootState> = combineReducers({
  counter: countReducer
});

export default reducer;
