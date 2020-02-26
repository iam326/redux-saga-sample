import { Action } from 'redux';

export enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export interface CounterIncrementAction extends Action {
  type: CounterActionType.INCREMENT;
}

export interface CounterDecrementAction extends Action {
  type: CounterActionType.DECREMENT;
}

export type CounterAction = CounterIncrementAction | CounterDecrementAction;

function incrementAction() {
  return { type:  CounterActionType.INCREMENT }
}

function decrementAction() {
  return { type:  CounterActionType.DECREMENT }
}

export const counterActionCreator = {
  incrementAction,
  decrementAction
};
