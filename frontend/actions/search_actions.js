import * as SearchApiUtil from '../util/search_api_util';

import { receiveUsers } from './user_actions';
import { receiveChannels } from './channel_actions';

export const searchUsers = (queryVal) => (dispatch) => {
  return SearchApiUtil.searchUsers(queryVal).then(
    (r) => dispatch(receiveUsers(r))
  )
}

export const searchChannels = (queryVal) => (dispatch) => {
  return SearchApiUtil.searchChannels(queryVal).then(
    (r) => dispatch(receiveChannels(r))
  )
}
