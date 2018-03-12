import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessage = ({message, user}) => {
  return {
    type: RECEIVE_MESSAGE,
    message,
    user
  }
}

export const receiveMessages = ({messages, users}) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
    users
  }
}

export const createMessage = (message, channel) => (dispatch) => {
  return MessageApiUtil.createMessage(message, channel).then(
    (message) => dispatch(receiveMessage(message))
  )
}

export const fetchMessages = (channelId) => (dispatch) => {
  return MessageApiUtil.fetchMessages(channelId).then(
    (messages) => dispatch(receiveMessages(messages))
  )
}
