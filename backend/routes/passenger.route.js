import express from 'express';
import { registerPassenger, loginPassenger, logoutPassenger, getPassengerProfile } from '../controllers/passenger.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerPassenger);
router.post('/login', loginPassenger);

// Protected routes (require authentication)
router.post('/logout', verifyJWT, logoutPassenger);
router.get('/profile', verifyJWT, getPassengerProfile);

 export default router;