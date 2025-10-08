import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable, of } from 'rxjs';

const DUMMY_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description:
      'An epic high fantasy saga following the quest to destroy the One Ring and the struggle between good and evil in Middle-earth.',
    rating: 4.9,
    length: 1178,
  },
  {
    id: '2',
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    description:
      'The first book in the A Song of Ice and Fire series, chronicling the power struggles among noble families in the Seven Kingdoms of Westeros.',
    rating: 4.8,
    length: 694,
  },
  {
    id: '3',
    title: 'Harry Potter and the Philosopher’s Stone',
    author: 'J.K. Rowling',
    description:
      'A young boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, beginning a journey that will change his life forever.',
    rating: 4.8,
    length: 336,
  },
  {
    id: '4',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    description:
      'The tale of Kvothe, a magically gifted young man who grows up to become the most legendary figure in his world.',
    rating: 4.7,
    length: 662,
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description:
      'Bilbo Baggins, a humble hobbit, is swept into an adventure with a band of dwarves and the wizard Gandalf to reclaim a lost treasure guarded by a dragon.',
    rating: 4.8,
    length: 310,
  },
  {
    id: '6',
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    description:
      'In a world ruled by the immortal Lord Ruler, a young street thief discovers her powers and joins a rebellion to overthrow the empire.',
    rating: 4.7,
    length: 541,
  },
];

@Injectable({ providedIn: 'root' })
export class UserService {
  public getUserCurrentlyReading(userId: string): Observable<Book[]> {
    return of(DUMMY_BOOKS);
  }

  public getFriendsCurrentlyReading(userId: string): Observable<Book[]> {
    return of(DUMMY_BOOKS);
  }

  public getUserLibrary(userId: string): Observable<Book[]> {
    return of(DUMMY_BOOKS);
  }

  public getUserWishlist(userId: string): Observable<Book[]> {
    return of(DUMMY_BOOKS);
  }
}
