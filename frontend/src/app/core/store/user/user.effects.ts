import { inject, Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);

  constructor(private readonly authService: AuthService) {}
}
