import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

const DUMMY_USER: User = {
  id: '123456',
  username: 'testuser',
  email: 'test@gmail.com',
  firstName: 'Test',
  lastName: 'User',
  friends: [],
  library: [],
  wishlist: [],
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  public loginUser(email: string, password: string): Observable<User> {
    if (!email || !password) return throwError(() => new Error('Email or password not provided!'));

    this.router.navigate(['dashboard']);
    return of(DUMMY_USER);
  }

  public registerUser(username: string, email: string, password: string): Observable<User> {
    if (!username || !email || !password)
      return throwError(() => new Error('Email, username or password not provided!'));

    this.router.navigate(['dashboard']);
    return of(DUMMY_USER);
  }

  public logoutUser(): Observable<boolean> {
    this.router.navigate(['login']);
    return of(true);
  }
}
