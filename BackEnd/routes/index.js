import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { addUlasan, getUlasan } from "../controllers/UlasanTanjakan13.js";
import { addFavorite, getFavorites } from "../controllers/favoriteController.js";

const router = express.Router();

// Users
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Ulasan Tanjakan13
router.post('/ulasantanjakan13', verifyToken, addUlasan);
router.get('/ulasantanjakan13', getUlasan);

// Add Favorites Routes
router.post('/favorites', verifyToken, addFavorite);
router.get('/favorites', verifyToken, getFavorites);

export default router;