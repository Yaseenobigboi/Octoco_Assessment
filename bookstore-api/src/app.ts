// this must set up express, add the json middleware, and register the book routes

import express from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(express.json());
app.use('/books', bookRoutes);

export default app;
