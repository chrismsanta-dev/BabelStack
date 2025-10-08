import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

// CURRENTLY READING
export const getCurrentlyReading = createAction(
  '[Dashboard] Get Currently Reading',
  props<{ userId: string }>()
);
export const getCurrentlyReadingSuccess = createAction(
  '[Dashboard] Get Currently Reading Success',
  props<{ books: Book[] }>()
);
export const getCurrentlyReadingFailure = createAction(
  '[Dashboard] Get Currently Reading Failure',
  props<{ error: Error | undefined }>()
);

// FRIENDS READING
export const getFriendsReading = createAction(
  '[Dashboard] Get Friends Reading',
  props<{ userId: string }>()
);
export const getFriendsReadingSuccess = createAction(
  '[Dashboard] Get Friends Reading Success',
  props<{ books: Book[] }>()
);
export const getFriendsReadingFailure = createAction(
  '[Dashboard] Get Friends Reading Failure',
  props<{ error: Error | undefined }>()
);

// LIBRARY
export const getLibrary = createAction('[Dashboard] Get Library', props<{ userId: string }>());
export const getLibrarySuccess = createAction(
  '[Dashboard] Get Library Success',
  props<{ books: Book[] }>()
);
export const getLibraryFailure = createAction(
  '[Dashboard] Get Library Failure',
  props<{ error: Error | undefined }>()
);

// WISHLIST
export const getWishlist = createAction('[Dashboard] Get Wishlist', props<{ userId: string }>());
export const getWishlistSuccess = createAction(
  '[Dashboard] Get Wishlist Success',
  props<{ books: Book[] }>()
);
export const getWishlistFailure = createAction(
  '[Dashboard] Get Wishlist Failure',
  props<{ error: Error | undefined }>()
);
