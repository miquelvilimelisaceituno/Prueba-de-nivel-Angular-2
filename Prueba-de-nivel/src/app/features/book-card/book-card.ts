import { Component, input, output } from '@angular/core';
import { Book } from '../../core/model/book.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
})
export class BookCard {
  readonly book =  input.required<Book>();
  readonly bookSelected = output<Book>();
}
