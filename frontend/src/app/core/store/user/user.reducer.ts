import { createReducer } from '@ngrx/store';
import { User } from './../../models/user.model';

export interface UserState {
  user: User | undefined;
  error: Error | undefined;
}

const initialState: Readonly<UserState> = {
  user: undefined,
  error: undefined,
};

export const userReducer = createReducer(initialState);
