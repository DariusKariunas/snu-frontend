import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { auth } from 'utils/firebase';
import { LOGIN } from 'containers/App/constants';
import * as C from './constants';

export function* createUser({ payload }) {
  try {
    const user = yield call(
      auth.doCreateUserWithEmailAndPassword,
      payload.email,
      payload.password,
    );
    yield put({ type: LOGIN, payload: user });
    yield put(push('/'));
  } catch (e) {
    console.log(e);
  }
}

// Individual exports for testing
export default function* signUpSaga() {
  yield takeLatest(C.REGISTER, createUser);
}
