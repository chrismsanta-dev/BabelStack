import { createReducer, on } from '@ngrx/store';
import { Book } from '../../models/book.model';
import {
  getCurrentlyReadingFailure,
  getCurrentlyReadingSuccess,
  getFriendsReadingFailure,
  getFriendsReadingSuccess,
  getLibraryFailure,
  getLibrarySuccess,
  getWishlistFailure,
  getWishlistSuccess,
} from './dashboard.actions';

export interface DashboardState {
  currentlyReading: Book[] | undefined;
  friendsReading: Book[] | undefined;
  library: Book[] | undefined;
  wishlist: Book[] | undefined;
}

const initialState: Readonly<DashboardState> = {
  currentlyReading: undefined,
  friendsReading: undefined,
  library: undefined,
  wishlist: undefined,
};

export const dashboardReducer = createReducer(
  initialState,
  on(getCurrentlyReadingSuccess, (state, { books }) => {
    return {
      ...state,
      currentlyReading: books,
      error: undefined,
    };
  }),
  on(getCurrentlyReadingFailure, (state, { error }) => {
    return {
      ...state,
      currentlyReading: undefined,
      error,
    };
  }),
  on(getFriendsReadingSuccess, (state, { books }) => {
    return {
      ...state,
      friendsReading: books,
      error: undefined,
    };
  }),
  on(getFriendsReadingFailure, (state, { error }) => {
    return {
      ...state,
      friendsReading: undefined,
      error,
    };
  }),
  on(getLibrarySuccess, (state, { books }) => {
    return {
      ...state,
      library: books,
      error: undefined,
    };
  }),
  on(getLibraryFailure, (state, { error }) => {
    return {
      ...state,
      library: undefined,
      error,
    };
  }),
  on(getWishlistSuccess, (state, { books }) => {
    return {
      ...state,
      wishlist: books,
      error: undefined,
    };
  }),
  on(getWishlistFailure, (state, { error }) => {
    return {
      ...state,
      wishlist: undefined,
      error,
    };
  })
);
