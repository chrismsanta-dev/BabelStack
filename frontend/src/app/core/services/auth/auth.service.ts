import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

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
  public loginUser(email: string, password: string): Observable<User> {
    if (!email || !password) throw new Error('Email or password not provided!');

    return of(DUMMY_USER);
  }

  public registerUser(username: string, email: string, password: string): Observable<User> {
    if (!username || !email || !password)
      throw new Error('Email, username or password not provided!');

    return of(DUMMY_USER);
  }

  public logoutUser(): Observable<boolean> {
    return of(true);
  }
}
