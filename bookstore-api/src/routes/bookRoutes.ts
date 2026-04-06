// this must map each URL to the right controller function

import { Router } from 'express';
import * as bookController from '../controllers/bookController';

const router = Router();

router.get('/', bookController.getAllBooks);
router.get('/discounted-price', bookController.getDiscountedPrice);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
