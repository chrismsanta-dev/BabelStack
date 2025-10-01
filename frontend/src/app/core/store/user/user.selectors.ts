import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<Readonly<UserState>>('user');

export const getUser = createSelector(selectUserState, (state) => state.user);
export const getUserError = createSelector(selectUserState, (state) => state.error);
