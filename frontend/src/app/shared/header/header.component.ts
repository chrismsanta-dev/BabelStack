import { Component, Signal } from '@angular/core';
import { User } from '../../core/models/user.model';
import { Store } from '@ngrx/store';
import { getUser } from '../../core/store/user/user.selectors';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { logoutUser } from '../../core/store/user/user.actions';

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public user: Signal<User | undefined>;

  constructor(private store: Store) {
    this.user = this.store.selectSignal(getUser);
  }

  protected logout(): void {
    this.store.dispatch(logoutUser());
  }
}
