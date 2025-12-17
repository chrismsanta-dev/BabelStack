import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();
    controller = app.get<BooksController>(BooksController);
  });

  it('should be created', () => {
    expect(controller).toBeTruthy();
  });

  it('should return a valid health check', () => {
    expect(controller.getHealth()).toBeTruthy();
  });
});
