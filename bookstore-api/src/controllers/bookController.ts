// handles incoming requests and sends responses
// calls the service to do the work

import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export function getAllBooks(req: Request, res: Response): void {
  const books = bookService.getAllBooks();
  res.status(200).json(books);
}

export function getBookById(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const book = bookService.getBookById(id);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json(book);
}

export function createBook(req: Request, res: Response): void {
  const { title, author, genre, price } = req.body;
  const book = bookService.createBook({ title, author, genre, price });
  res.status(201).json(book);
}

export function updateBook(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const { title, author, genre, price } = req.body;
  const book = bookService.updateBook(id, { title, author, genre, price });

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json(book);
}

export function deleteBook(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  const deleted = bookService.deleteBook(id);

  if (!deleted) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json({ message: 'Book deleted' });
}
