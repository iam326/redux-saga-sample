import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import { RootState } from '../store/configureStore';
import { actions } from '../actions/counter';
import Counter from '../components/Counter';

interface StateToProps {
  value: number;
}

interface DispatchToProps {
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
}

type Props = StateToProps & DispatchToProps;

function CountContainer(props: Props) {
  const { value, increment, decrement, incrementAsync } = props;
  return (
    <Counter 
      value={value}
      increment={increment}
      decrement={decrement}
      incrementAsync={incrementAsync}
    />
  );
}

function mapStateToProps(state: RootState): StateToProps {
  const { counter } = state;
  return {
    value: counter.value
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<void>>): DispatchToProps {
  return {
    increment: () => {
      dispatch(actions.increment())
    },
    decrement: () => {
      dispatch(actions.decrement())
    },
    incrementAsync: () => {
      dispatch(actions.incrementAsync())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountContainer);
