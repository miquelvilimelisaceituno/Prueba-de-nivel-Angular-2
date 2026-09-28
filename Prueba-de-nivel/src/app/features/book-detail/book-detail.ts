import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '../../core/services/book.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CurrencyPipe, RouterLink],
  selector: 'app-book-detail',
  styleUrl: './book-detail.css',
  templateUrl: './book-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetail {
  private readonly bookService = inject(BookService);
  readonly id = input.required<string>();
  protected readonly book = computed(() => this.bookService.getById(Number(this.id())));
}
