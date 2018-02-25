import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { clearToken } from '../../helpers/utility';
import actions from './actions';
import apiUrl from '../../config';

const url = apiUrl.apiUrl;

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*(request) {
    const endpoint = url + 'api/v1/login/';
    const data = {
      email: request.payload.username,
      password: request.payload.password
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    const profile = yield fetch(endpoint, options)
      .then((response) => {
        const user = {};

        if (!response.ok) {
          user.type = actions.LOGIN_ERROR;
          return Promise.resolve(user);
        }

        const json = response.json();

        user.type = actions.LOGIN_SUCCESS;
        user.token = json.token;
        user.profile = {
          id: json.profile_id,
          accountType: json.account_type,
          email: json.email
        };

        return Promise.resolve(user);
      })
      .catch((error) => {
        console.log(error);
      })

    yield put(profile);
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken();
    yield put(push('/'));
  });
}
export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ]);
}
