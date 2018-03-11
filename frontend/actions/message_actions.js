import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = (message) => {
  return {
    type: CREATE_MESSAGE,
    message
  }
}

export const createMessage = (message, channel) => (dispatch) => {
  return MessageApiUtil.createMessage(message, channel).then(
    (message) => dispatch(receiveMessage(message))
  )
}
