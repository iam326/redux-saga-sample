import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators, ActionCreator } from 'redux';

import { RootState } from '../store/configureStore';
import { actions } from '../actions/counter';
import Counter from '../components/Counter';

interface StateToProps {
  value: number;
}

interface DispatchToProps {
  increment: ActionCreator<void>;
  decrement: ActionCreator<void>;
  incrementAsync: ActionCreator<void>;
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

function mapDispatchToProps(dispatch: Dispatch): DispatchToProps {
  return bindActionCreators({
      increment: actions.increment,
      decrement: actions.decrement,
      incrementAsync: actions.incrementAsync.started
    }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountContainer);
