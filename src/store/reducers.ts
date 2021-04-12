import { combineReducers } from 'redux';
import { UsersReducer } from './users/reducer';
import { UserDetailReducer } from './user/reducer';

export const rootReducer = combineReducers({
  users : UsersReducer,
  user : UserDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>