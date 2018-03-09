import * as SearchApiUtil from '../util/search_api_util';

import { receiveUsers } from './user_actions';
import { receiveChannels } from './channel_actions';

export const CLEAR_SEARCH = 'CLEAR_SEARCH'

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

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}
