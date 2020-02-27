import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
  increment: actionCreator('INCREMENT'),
  decrement: actionCreator('DECREMENT'),
  incrementAsync: actionCreator('INCREMENT_ASYNC')
};
