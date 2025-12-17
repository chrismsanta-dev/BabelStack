import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller()
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('health')
  getHealth() {
    return 'books controller is working!';
  }
}
