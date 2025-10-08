import { inject, Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCurrentlyReading,
  getCurrentlyReadingFailure,
  getCurrentlyReadingSuccess,
  getFriendsReading,
  getFriendsReadingFailure,
  getFriendsReadingSuccess,
  getLibrary,
  getLibraryFailure,
  getLibrarySuccess,
  getWishlist,
  getWishlistFailure,
  getWishlistSuccess,
} from './dashboard.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);

  constructor(private readonly userService: UserService) {}

  getCurrentlyReading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentlyReading),
      switchMap(({ userId }) =>
        this.userService.getUserCurrentlyReading(userId).pipe(
          map((books: Book[]) => getCurrentlyReadingSuccess({ books })),
          catchError((error) => of(getCurrentlyReadingFailure({ error })))
        )
      )
    );
  });

  getFriendsReading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFriendsReading),
      switchMap(({ userId }) =>
        this.userService.getFriendsCurrentlyReading(userId).pipe(
          map((books: Book[]) => getFriendsReadingSuccess({ books })),
          catchError((error) => of(getFriendsReadingFailure({ error })))
        )
      )
    );
  });

  getLibrary$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getLibrary),
      switchMap(({ userId }) =>
        this.userService.getUserLibrary(userId).pipe(
          map((books: Book[]) => getLibrarySuccess({ books })),
          catchError((error) => of(getLibraryFailure({ error })))
        )
      )
    );
  });

  getWishlist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getWishlist),
      switchMap(({ userId }) =>
        this.userService.getUserWishlist(userId).pipe(
          map((books: Book[]) => getWishlistSuccess({ books })),
          catchError((error) => of(getWishlistFailure({ error })))
        )
      )
    );
  });
}
