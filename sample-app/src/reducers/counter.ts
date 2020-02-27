import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { CounterState } from '../store/configureStore';
import { actions } from '../actions/counter';

const initialState: CounterState = {
  value: 0
};

const countReducer = reducerWithInitialState(initialState)
  .case(actions.increment, state => {
    return { value: state.value + 1 };
  })
  .case(actions.decrement, state => {
    return { value: state.value - 1 };
  });

export default countReducer;
