import { put, takeEvery, delay } from 'redux-saga/effects';

import { CounterActionType, counterActionCreator } from '../actions/counter';

export function* incrementAsync() {
  yield delay(1000);
  yield put(counterActionCreator.incrementAction());
}

export default function* rootSaga() {
  yield takeEvery(CounterActionType.INCREMENT_ASYNC, incrementAsync);
}
