import { combineReducers } from 'redux';

import { modalReducer } from './modal_reducer';
import { searchReducer } from './search_Reducer';

export const uiReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer
})
