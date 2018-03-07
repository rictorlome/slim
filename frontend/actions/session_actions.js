import * as SessionApiUtil from '../util/session_api_util';
import secureRandom from 'secure-random';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  );
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  );
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  );
};

export const createGuest = () => (dispatch) => {
  const username = "guest" + secureRandom(10).join('').slice(0,10);
  const password = secureRandom(16).join('').slice(0,12);
  const user = {username: username, password:password};
  dispatch(signup(user));
};
