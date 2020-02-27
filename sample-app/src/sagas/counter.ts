import { put, takeEvery, delay } from 'redux-saga/effects';

import { actions } from '../actions/counter';

export function* incrementAsync() {
  yield delay(1000);
  yield put(actions.increment());
}

export default function* rootSaga() {
  yield takeEvery(actions.incrementAsync, incrementAsync);
}
