// handles incoming requests and sends responses
// calls the service to do the work
// checks that the request has the right data before doing anything

import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export function getAllBooks(req: Request, res: Response): void {
  const books = bookService.getAllBooks();
  res.status(200).json(books);
}

export function getBookById(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID must be a number' });
    return;
  }

  const book = bookService.getBookById(id);

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json(book);
}

export function createBook(req: Request, res: Response): void {
  const { title, author, genre, price } = req.body;

  if (!title || !author || !genre || price === undefined) {
    res.status(400).json({ message: 'title, author, genre and price are required' });
    return;
  }

  if (typeof price !== 'number' || price < 0) {
    res.status(400).json({ message: 'price must be a positive number' });
    return;
  }

  const book = bookService.createBook({ title, author, genre, price });
  res.status(201).json(book);
}

export function updateBook(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID must be a number' });
    return;
  }

  const { title, author, genre, price } = req.body;

  if (price !== undefined && (typeof price !== 'number' || price < 0)) {
    res.status(400).json({ message: 'price must be a positive number' });
    return;
  }

  const book = bookService.updateBook(id, { title, author, genre, price });

  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json(book);
}

export function deleteBook(req: Request, res: Response): void {
  const id = parseInt(req.params.id as string);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID must be a number' });
    return;
  }

  const deleted = bookService.deleteBook(id);

  if (!deleted) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }

  res.status(200).json({ message: 'Book deleted' });
}

export function getDiscountedPrice(req: Request, res: Response): void {
  const genre = req.query.genre as string;
  const discount = req.query.discount as string;

  if (!genre || !discount) {
    res.status(400).json({ message: 'genre and discount are required' });
    return;
  }

  const discountNumber = parseFloat(discount);

  if (isNaN(discountNumber) || discountNumber < 0 || discountNumber > 100) {
    res.status(400).json({ message: 'discount must be a number between 0 and 100' });
    return;
  }

  const total = bookService.getDiscountedPrice(genre, discountNumber);

  res.status(200).json({
    genre: genre,
    discount_percentage: discountNumber,
    total_discounted_price: total,
  });
}
