import { Book } from '../types/book';

let books: Book[] = [];
let nextId = 1;

export function getAllBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
  return undefined;
}

export function createBook(data: Omit<Book, 'id'>): Book {
  const book: Book = {
    id: nextId,
    title: data.title,
    author: data.author,
    genre: data.genre,
    price: data.price,
  };
  nextId++;
  books.push(book);
  return book;
}

export function updateBook(id: number, data: Partial<Omit<Book, 'id'>>): Book | undefined {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      if (data.title !== undefined) books[i].title = data.title;
      if (data.author !== undefined) books[i].author = data.author;
      if (data.genre !== undefined) books[i].genre = data.genre;
      if (data.price !== undefined) books[i].price = data.price;
      return books[i];
    }
  }
  return undefined;
}

export function deleteBook(id: number): boolean {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
      return true;
    }
  }
  return false;
}

export function getBooksByGenre(genre: string): Book[] {
  const result: Book[] = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].genre.toLowerCase() === genre.toLowerCase()) {
      result.push(books[i]);
    }
  }
  return result;
}
