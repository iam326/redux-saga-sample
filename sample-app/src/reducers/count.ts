export type CounterState = {
  counter: number;
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
  counter: 0
};

export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
