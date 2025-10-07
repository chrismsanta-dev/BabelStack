import { Component, Signal } from '@angular/core';
import { User } from '../../core/models/user.model';
import { Store } from '@ngrx/store';
import { getUser } from '../../core/store/user/user.selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public user: Signal<User | undefined>;

  constructor(private store: Store) {
    this.user = this.store.selectSignal(getUser);
  }
}
