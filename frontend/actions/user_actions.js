export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_PARTICIPATION = 'RECEIVE_PARTICIPATION';
export const REMOVE_PARTICIPATION = 'REMOVE_PARTICIPATION';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
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
