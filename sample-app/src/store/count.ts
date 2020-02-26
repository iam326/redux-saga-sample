import { Action, createStore, Store } from 'redux';
import reducer, { RootState } from '../reducers';

const store: Store<RootState, Action>  = createStore(reducer);
export default store;
