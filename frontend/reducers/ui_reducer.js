import { combineReducers } from 'redux';

import { modalReducer } from './modal_reducer';
import { searchReducer } from './search_reducer';
import { selectedReducer } from './selected_reducer';

export const uiReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer,
  selected: selectedReducer
})
