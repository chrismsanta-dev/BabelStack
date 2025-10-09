import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../core/models/user.model';
import { Book } from '../../core/models/book.model';
import { getUser } from '../../core/store/user/user.selectors';
import {
  selectCurrentlyReading,
  selectFriendsReading,
  selectLibrary,
  selectWishlist,
} from '../../core/store/dashboard/dashboard.selectors';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  protected user: Signal<User | undefined>;
  protected currentlyReading: Signal<Book[] | undefined>;
  protected friendsReading: Signal<Book[] | undefined>;
  protected library: Signal<Book[] | undefined>;
  protected wishlist: Signal<Book[] | undefined>;

  constructor(private readonly store: Store) {
    this.user = this.store.selectSignal(getUser);
    this.currentlyReading = this.store.selectSignal(selectCurrentlyReading);
    this.friendsReading = this.store.selectSignal(selectFriendsReading);
    this.library = this.store.selectSignal(selectLibrary);
    this.wishlist = this.store.selectSignal(selectWishlist);
  }
}
