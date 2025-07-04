import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { addFavorite, getFavorites,deleteFavorite } from '../controllers/userController.js';


const router = express.Router();

router.post('/favorites', protect, addFavorite);
router.get('/favorites', protect, getFavorites);
router.delete('/favorites', protect, deleteFavorite);

export default router;
