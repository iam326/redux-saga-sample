import { CounterState } from '../store/configureStore';
import { CounterAction, CounterActionType } from '../actions/counter';

const initialState: CounterState = {
  value: 0
};

export default function countReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        value: state.value + 1
      };
    case CounterActionType.DECREMENT:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}
