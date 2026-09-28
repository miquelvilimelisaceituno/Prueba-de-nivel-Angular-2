import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {

    private readonly books: Book[] = [
        {
    id: 1,
    title: 'Cien años de soledad',
    price: 19.95,
    description: 'La saga de la familia Buendía en el mítico pueblo de Macondo, obra cumbre del realismo mágico.',
    image: 'https://picsum.photos/seed/book1/400/400',
    category: 'novela',
  },
  {
    id: 2,
    title: 'Don Quijote de la Mancha',
    price: 24.5,
    description: 'Las aventuras del ingenioso hidalgo y su fiel escudero Sancho Panza por tierras castellanas.',
    image: 'https://picsum.photos/seed/book2/400/400',
    category: 'clásicos',
  },
  {
    id: 3,
    title: '1984',
    price: 14.99,
    description: 'Una distopía sobre un régimen totalitario que vigila cada pensamiento de sus ciudadanos.',
    image: 'https://picsum.photos/seed/book3/400/400',
    category: 'ciencia ficción',
  },
  {
    id: 4,
    title: 'El nombre del viento',
    price: 22.9,
    description: 'Kvothe narra su vida, desde su infancia en una troupe de artistas hasta convertirse en leyenda.',
    image: 'https://picsum.photos/seed/book4/400/400',
    category: 'fantasía',
  },
  {
    id: 5,
    title: 'Sapiens: De animales a dioses',
    price: 21.75,
    description: 'Un recorrido por la historia de la humanidad, desde la Edad de Piedra hasta la actualidad.',
    image: 'https://picsum.photos/seed/book5/400/400',
    category: 'ensayo',
  },
  {
    id: 6,
    title: 'La sombra del viento',
    price: 18.95,
    description: 'Un joven descubre un libro maldito en el Cementerio de los Libros Olvidados de Barcelona.',
    image: 'https://picsum.photos/seed/book6/400/400',
    category: 'misterio',
  },
  {
    id: 7,
    title: 'Clean Code',
    price: 39.99,
    description: 'Guía práctica para escribir código legible, mantenible y profesional.',
    image: 'https://picsum.photos/seed/book7/400/400',
    category: 'programación',
  },
  {
    id: 8,
    title: 'Dune',
    price: 23.5,
    description: 'Intrigas políticas, religión y ecología en el desértico planeta Arrakis.',
    image: 'https://picsum.photos/seed/book8/400/400',
    category: 'ciencia ficción',
  },
  {
    id: 9,
    title: 'El principito',
    price: 9.95,
    description: 'Un pequeño príncipe viaja entre planetas y descubre lo esencial, invisible a los ojos.',
    image: 'https://picsum.photos/seed/book9/400/400',
    category: 'infantil',
  },
  {
    id: 10,
    title: 'Hábitos atómicos',
    price: 17.9,
    description: 'Cambios pequeños que producen resultados extraordinarios en tu vida diaria.',
    image: 'https://picsum.photos/seed/book10/400/400',
    category: 'autoayuda',
  },
];

getAll(): Book[]{
    return this.books;
}

getById(id: number): Book | undefined {
    return this.books.find(book => book.id === id)
}


}
