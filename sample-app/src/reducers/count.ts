export type CounterState = {
  value: number;
}

export type CounterAction =
  {
    type: 'INCREMENT';
  } |
  {
    type: 'DECREMENT';
  }
;

const initialState: CounterState = {
  value: 0
};

export default function countReducer(state = initialState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      };
    case 'DECREMENT':
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}
