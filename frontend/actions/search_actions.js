import * as SearchApiUtil from '../util/search_api_util';

import { receiveUsers } from './user_actions';

export const searchUsers = (queryVal) => (dispatch) => {
  return SearchApiUtil.searchUsers(queryVal).then(
    (r) => dispatch(receiveUsers(r))
  )
}
