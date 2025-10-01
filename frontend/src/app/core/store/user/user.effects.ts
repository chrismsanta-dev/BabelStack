import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logoutUser,
  logoutUserFailure,
  logoutUserSuccess,
  registerUser,
  registerUserFailure,
  registerUserSuccess,
} from './user.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);

  constructor(private readonly authService: AuthService) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginUser),
      switchMap((payload) =>
        this.authService.loginUser(payload.email, payload.password).pipe(
          map((user: User) => loginUserSuccess({ user })),
          catchError((error) => of(loginUserFailure({ error })))
        )
      )
    );
  });

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerUser),
      switchMap((payload) =>
        this.authService.registerUser(payload.username, payload.email, payload.password).pipe(
          map((user: User) => registerUserSuccess({ user })),
          catchError((error) => of(registerUserFailure({ error })))
        )
      )
    );
  });

  logoutUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutUser),
      switchMap(() =>
        this.authService.logoutUser().pipe(
          map(() => logoutUserSuccess()),
          catchError((error) => of(logoutUserFailure({ error })))
        )
      )
    );
  });
}
