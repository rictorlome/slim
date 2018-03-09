import { SELECT_USER, UNSELECT_USER } from '../actions/select_actions'
import { CLOSE_MODAL } from '../actions/modal_actions'

export const selectedReducer = (oldState=[],action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SELECT_USER:
      return oldState.concat(action.userId);
    case UNSELECT_USER:
      const copy = oldState.slice()
      const index = copy.indexOf(action.userId)
      if (index !== -1) copy.splice(index, 1);
      return copy;
    case CLOSE_MODAL:
      return [];
    default:
      return oldState;
  }
}
