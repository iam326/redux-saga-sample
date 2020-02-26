import { combineReducers, Reducer } from 'redux';
import countReducer, { CounterState } from './counter';

export interface RootState {
  counter: CounterState;
}

const reducer: Reducer<RootState> = combineReducers({
  counter: countReducer
});

export default reducer;
