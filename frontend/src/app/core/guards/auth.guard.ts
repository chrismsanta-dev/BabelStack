import { Injectable, Signal } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { getUser } from '../store/user/user.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private user: Signal<User | undefined>;

  constructor(private readonly store: Store, private readonly router: Router) {
    this.user = this.store.selectSignal(getUser);
  }

  public canActivate(): boolean | UrlTree {
    return this.user() ? true : this.router.createUrlTree(['/login']);
  }
}
