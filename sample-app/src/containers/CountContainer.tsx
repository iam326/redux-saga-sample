import React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { RootState } from '../store/configureStore';
import { counterActionCreator} from '../actions/counter';
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

function mapDispatchToProps(dispatch: Dispatch<Action>): DispatchToProps {
  return {
    increment: () => {
      dispatch(counterActionCreator.incrementAction())
    },
    decrement: () => {
      dispatch(counterActionCreator.decrementAction())
    },
    incrementAsync: () => {
      dispatch(counterActionCreator.incrementAsyncAction())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountContainer);
