import { Action, createStore, Store } from 'redux';
import reducer, { CounterState } from '../reducers/count';

const store: Store<CounterState, Action>  = createStore(reducer);
export default store;
