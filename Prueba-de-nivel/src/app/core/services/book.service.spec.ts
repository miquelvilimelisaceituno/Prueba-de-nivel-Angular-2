import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia funcionar getAll()', () => {
    const books = service.getAll();
    expect(books).toHaveLength(10);
  });

  it('deberia funcionar getById()', () => {
    const book = service.getById(2);
    expect(book?.id).toBe(2);
  });

  it('deberia funcionar getById() con una id que no pueda existir', () => {
    const book = service.getById(99);
    expect(book).toBeUndefined();
  });
});
