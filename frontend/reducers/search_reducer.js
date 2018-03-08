import { RECEIVE_USERS } from '../actions/user_actions.js'

export const searchReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USERS:
      return Object.keys(action.users);
    default:
      return oldState;
  }
}
