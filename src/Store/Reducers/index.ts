import { combineReducers } from 'redux';
import modals from 'Store/Reducers/modals';
import message from 'Store/Reducers/message';

const rootReducer = combineReducers({
  modals,
  message,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
