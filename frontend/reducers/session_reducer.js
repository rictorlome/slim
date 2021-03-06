import {
  RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_CURRENT_USER,
   CLEAR_SESSION_ERRORS, receiveCurrentUser, receiveSessionErrors} from '../actions/session_actions';
import { merge } from 'lodash';


export const sessionReducer = (oldState= { currentUser: null}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    case REMOVE_CURRENT_USER:
      return {currentUser: null}
    default:
      return oldState;
  }
};

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
};
