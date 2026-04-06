# Bookstore API

A RESTful API for managing a bookstore inventory, built with **Express** and **TypeScript**.

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- npm

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |
| GET | `/books/discounted-price?genre={genre}&discount={percent}` | Get total discounted price for a genre |

## Example Request Body (POST / PUT)

```json
{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "price": 50
}
```

## Example Discounted Price Response

```
GET /books/discounted-price?genre=Fiction&discount=10
```

```json
{
  "genre": "Fiction",
  "discount_percentage": 10,
  "total_discounted_price": 112.50
}
```
