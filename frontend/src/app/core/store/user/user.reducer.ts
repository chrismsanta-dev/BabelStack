import { createReducer, on } from '@ngrx/store';
import { User } from './../../models/user.model';
import {
  loginUserFailure,
  loginUserSuccess,
  logoutUserFailure,
  logoutUserSuccess,
  registerUserFailure,
  registerUserSuccess,
} from './user.actions';

export interface UserState {
  user: User | undefined;
  error: Error | undefined;
}

const initialState: Readonly<UserState> = {
  user: undefined,
  error: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(loginUserSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      error: undefined,
    };
  }),
  on(loginUserFailure, (state, { error }) => {
    return {
      ...state,
      user: undefined,
      error,
    };
  }),
  on(registerUserSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      error: undefined,
    };
  }),
  on(registerUserFailure, (state, { error }) => {
    return {
      ...state,
      user: undefined,
      error,
    };
  }),
  on(logoutUserSuccess, (state) => {
    return {
      ...state,
      user: undefined,
      error: undefined,
    };
  }),
  on(logoutUserFailure, (state, { error }) => {
    return {
      ...state,
      error,
    };
  })
);
