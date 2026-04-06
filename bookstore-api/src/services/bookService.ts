// this service should:
// - receive calls from the controller
// - handle business logic
// - call the repository to get or save data

import { Book } from '../types/book';
import * as bookRepository from '../repositories/bookRepository';

export function getAllBooks(): Book[] {
  return bookRepository.getAllBooks();
}

export function getBookById(id: number): Book | undefined {
  return bookRepository.getBookById(id);
}

export function createBook(data: Omit<Book, 'id'>): Book {
  return bookRepository.createBook(data);
}

export function updateBook(id: number, data: Partial<Omit<Book, 'id'>>): Book | undefined {
  return bookRepository.updateBook(id, data);
}

export function deleteBook(id: number): boolean {
  return bookRepository.deleteBook(id);
}

export function getDiscountedPrice(genre: string, discountPercentage: number): number {
  const books = bookRepository.getBooksByGenre(genre);

  let total = 0;
  for (let i = 0; i < books.length; i++) {
    total = books[i].price;
  }

  const discountAmount = (discountPercentage / 100) * total;
  const discountedTotal = total - discountAmount;

  return discountedTotal;
}
