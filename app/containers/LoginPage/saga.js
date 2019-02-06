import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { LOGIN } from 'containers/App/constants';
import * as C from './constants';

function* login({ payload }) {
  yield call(delay, 2000);
  if (payload.password === 'pass') {
    yield put({ type: LOGIN });
    yield put({ type: C.LOGIN_SUCCESS });
  } else {
    yield put({ type: C.LOGIN_FAIL });
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeEvery(C.LOGIN, login);
}
