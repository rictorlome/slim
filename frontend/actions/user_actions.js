import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PARTICIPATION = 'RECEIVE_PARTICIPATION';
export const REMOVE_PARTICIPATION = 'REMOVE_PARTICIPATION';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveParticipation = ({user, channel}) => {
  return {
    type: RECEIVE_PARTICIPATION,
    user,
    channel
  }
}

export const removeParticipation = ({user, channel}) => {
  return {
    type: REMOVE_PARTICIPATION,
    user,
    channel
  }
}

export const updateUserImage = (formData, id) => (dispatch) => {
  return UserApiUtil.updateUserImage(formData, id).then(
    (user) => dispatch(receiveUser(user))
  )
}
