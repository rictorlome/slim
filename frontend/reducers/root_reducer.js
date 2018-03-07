import { combineReducers } from 'redux';

import { userReducer } from './user_reducer';
import { sessionReducer } from './session_reducer';
import { channelReducer } from './channel_reducer';
import errorsReducer from './errors_reducer';

const entitiesReducer = combineReducers({
  channels: channelReducer,
  users: userReducer
});


export const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
});
