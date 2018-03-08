import * as SessionApiUtil from '../util/session_api_util';
import secureRandom from 'secure-random';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const receiveCurrentUser = ({user, channels}) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user.id,
    user,
    channels
  };
};

export const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER,
    currentUser: null
  }
}

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  );
};

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then(
    (payload) => dispatch(receiveCurrentUser(payload)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON.errors))
  );
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(
    () => dispatch(removeCurrentUser())
  );
};

export const createGuest = () => (dispatch) => {
  const username = "guest" + secureRandom(10).join('').slice(0,10);
  const password = secureRandom(16).join('').slice(0,12);
  const user = {username: username, password:password};
  dispatch(signup(user));
};
