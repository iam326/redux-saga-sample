import { Action } from 'redux';

export enum CounterActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  INCREMENT_ASYNC = 'INCREMENT_ASYNC'
}

export interface CounterIncrementAction extends Action {
  type: CounterActionType.INCREMENT;
}

export interface CounterDecrementAction extends Action {
  type: CounterActionType.DECREMENT;
}

export interface CounterIncrementAsyncAction extends Action {
  type: CounterActionType.INCREMENT_ASYNC;
}

export type CounterAction = 
  CounterIncrementAction | 
  CounterDecrementAction |
  CounterIncrementAsyncAction;

function incrementAction() {
  return { type:  CounterActionType.INCREMENT }
}

function decrementAction() {
  return { type:  CounterActionType.DECREMENT }
}

function incrementAsyncAction() {
  return { type:  CounterActionType.INCREMENT_ASYNC }
}

export const counterActionCreator = {
  incrementAction,
  decrementAction,
  incrementAsyncAction
};
