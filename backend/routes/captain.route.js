
import express from 'express';
import { registerCaptain, loginCaptain, logoutCaptain, getCaptainProfile } from '../controllers/captain.controller.js';
import { verifyCaptainJWT } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', registerCaptain);
router.post('/login', loginCaptain);
router.get('/profile', verifyCaptainJWT, getCaptainProfile);
router.post('/logout', verifyCaptainJWT, logoutCaptain);

export default router;