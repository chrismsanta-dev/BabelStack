import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<Readonly<DashboardState>>('dashboard');

export const selectCurrentlyReading = createSelector(
  selectDashboardState,
  (state) => state.currentlyReading
);
export const selectFriendsReading = createSelector(
  selectDashboardState,
  (state) => state.friendsReading
);
export const selectLibrary = createSelector(selectDashboardState, (state) => state.library);
export const selectWishlist = createSelector(selectDashboardState, (state) => state.wishlist);
