import { takeLatest, put, cancelled } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { firebase } from 'utils/firebase';
import { LOGIN_SUCCESS, LOGIN } from 'containers/LoginPage/constants';
import * as C from './constants';

function* handleStatusChange({ user, error }) {
  if (user) {
    yield put({ type: C.LOGIN, payload: user });
    yield put({ type: LOGIN_SUCCESS });
  } else {
    yield put({ type: C.LOGOUT });
  }
  if (error) {
    yield put({ type: C.LOGOUT });
  }
}

function* track() {
  yield put({ type: LOGIN });
  const authChannel = eventChannel(emit =>
    firebase.auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error }),
    ),
  );
  try {
    yield takeLatest(authChannel, handleStatusChange);
  } finally {
    if (yield cancelled()) {
      authChannel.close();
    }
  }
}

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(C.TRACK_USER, track);
}
