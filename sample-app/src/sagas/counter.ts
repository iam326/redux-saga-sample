import { SagaIterator } from 'redux-saga';
import { call, fork, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';

import { actions } from '../actions/counter';

const delay = async (): Promise<void> => {
  console.log('delay!');
  await new Promise(resolve => setTimeout(resolve, 10000))
}

function* worker() {
  return yield call(delay)
}

const boundWorker = bindAsyncAction(
  actions.incrementAsync,
  { skipStartedAction: true }
)(worker)

function* incrementAsyncHandler(): SagaIterator {
  yield takeEvery(actions.incrementAsync.started, function*() {
    yield call(boundWorker)
  });
}

export default function* rootSaga(): SagaIterator {
  yield fork(incrementAsyncHandler)
}
