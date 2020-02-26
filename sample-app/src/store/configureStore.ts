import { Action, createStore, Store } from 'redux';

import reducer from '../reducers';

export interface CounterState {
  value: number;
}

export interface RootState {
  counter: CounterState;
}

export default function configureStore() {
  const store: Store<RootState, Action>  = createStore(reducer);
  return store;
}
