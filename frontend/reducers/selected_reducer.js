import { SELECT_CHANNEL } from '../actions/select_actions'

export const selectedReducer = (oldState=null,action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SELECT_CHANNEL:
      return action.channelId
    default:
      return oldState;
  }
}
