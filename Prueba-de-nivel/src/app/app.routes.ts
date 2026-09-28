import { Routes } from '@angular/router';
import { BookList } from './features/book-list/book-list';
import { BookDetail } from './features/book-detail/book-detail';


export const routes: Routes = [
    {path: '', redirectTo: 'books', pathMatch: 'full'},
    {path: 'books', component: BookList},
    {path: 'books/:id', component: BookDetail }
];
