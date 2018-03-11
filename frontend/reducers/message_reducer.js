import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions'

import { merge } from 'lodash';

export const messageReducer = (oldState={},action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      const newObj = {};
      newObj[action.message.id] = action.message;
      return merge({},oldState,newObj);
    case RECEIVE_MESSAGES:
      return merge({},oldState,action.messages)
    default:
      return oldState;
  }
}
