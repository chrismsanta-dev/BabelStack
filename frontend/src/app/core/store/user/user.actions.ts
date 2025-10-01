import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

// LOGIN
export const loginUser = createAction(
  '[User] Login User',
  props<{ username: string; password: string }>()
);
export const loginUserSuccess = createAction('[User] Login User Success', props<{ user: User }>);
export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{ error: Error | undefined }>
);

// REGISTRATION
export const registerUser = createAction(
  '[USER] Register User',
  props<{ username: string; email: string; password: string }>
);
export const registerUserSuccess = createAction(
  '[User] Register User Success',
  props<{ user: User }>()
);
export const registerUserFailure = createAction(
  '[User] Register User Failure',
  props<{ error: Error | undefined }>()
);

// LOGOUT
export const logoutUser = createAction('[USER] Logout User');
export const logoutUserSuccess = createAction('[USER] Logout User Success');
export const logoutUserFailure = createAction(
  '[USER] Logout User Failure',
  props<{ error: Error | undefined }>()
);

// UPDATE USERNAME

// UPDATE PASSWORD

// UPDATE EMAIL

// ADD FRIEND

// REMOVE FRIEND
