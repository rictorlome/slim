export const SELECT_USER = 'SELECT_USER';
export const UNSELECT_USER = 'UNSELECT_USER';

export const selectUser = (userId) => {
  return {
    type: SELECT_USER,
    userId
  }
}

export const unselectUser = (userId) => {
  return {
    type: UNSELECT_USER,
    userId
  }
}
