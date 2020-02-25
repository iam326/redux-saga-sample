import React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CounterState } from './reducers/count';

import actionCreator from './actions/count';

interface Props {
  increment: () => void;
  decrement: () => void;
  counter: number;
}

function Counter(props: Props) {
  return (
    <div>
      <button onClick={props.increment}>
        +1
      </button>
      <button onClick={props.decrement}>
        -1
      </button>
      <div>
        Count: {props.counter}
      </div>
    </div>
  )
}

interface DispatchToProps {
  increment: () => void;
  decrement: () => void;
}

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>): DispatchToProps {
  return {
    increment: () => {
      dispatch(actionCreator('INCREMENT'))
    },
    decrement: () => {
      dispatch(actionCreator('DECREMENT'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
