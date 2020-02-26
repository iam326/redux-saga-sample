import React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './reducers';

import actionCreator from './actions/count';

interface Props {
  increment: () => void;
  decrement: () => void;
  value: number;
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
        Count: {props.value}
      </div>
    </div>
  )
}

interface DispatchToProps {
  increment: () => void;
  decrement: () => void;
}

function mapStateToProps(state: RootState) {
  const { counter } = state;
  return {
    value: counter.value
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
