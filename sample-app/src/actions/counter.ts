import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
  increment: actionCreator<void>('INCREMENT'),
  decrement: actionCreator<void>('DECREMENT'),
  incrementAsync: actionCreator.async<void, void>('INCREMENT_ASYNC')
};
