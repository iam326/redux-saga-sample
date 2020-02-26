import { Action, createStore, Store } from 'redux';
import reducer, { RootState } from '../reducers';

export default function configureStore() {
  const store: Store<RootState, Action>  = createStore(reducer);
  return store;
}
