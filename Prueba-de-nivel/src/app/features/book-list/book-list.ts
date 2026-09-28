import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { BookService } from '../../core/services/book.service';
import { Router } from '@angular/router';
import { Book } from '../../core/model/book.model';

@Component({
  imports: [BookCard],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookList {
  private readonly bookService = inject(BookService);
  private readonly router = inject(Router);
  private readonly books = signal(this.bookService.getAll());

  onBookSelected(book: Book) {
    this.router.navigate(['/books', book.id]);
  }
}
