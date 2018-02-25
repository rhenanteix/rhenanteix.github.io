import { Map } from 'immutable';
import { getToken } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  idToken: null,
  failLogin: null
});

export default function authReducer(
  state = initState.merge(getToken()),
  action
) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      state.set('failLogin', null);
      return state.set('idToken', action.token);
    case actions.LOGIN_ERROR:
      return state.set('failLogin', true);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
