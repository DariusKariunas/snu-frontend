import { call, put, takeEvery } from 'redux-saga/effects';
import { auth } from 'utils/firebase';
import { LOGIN } from 'containers/App/constants';
import * as C from './constants';

function* login({ payload }) {
  try {
    const { user } = yield call(
      auth.doSignInWithEmailAndPassword,
      payload.email,
      payload.password,
    );
    yield put({ type: LOGIN, payload: user });
    yield put({ type: C.LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: C.LOGIN_FAIL });
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeEvery(C.LOGIN, login);
}
