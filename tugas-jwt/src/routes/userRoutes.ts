import { Router } from 'express';
import { registerUser, listUsers } from '../controllers/userController';
//import { login, register, updateProfile, me } from '../services/auth.service';
import authController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post('/register', registerUser);
router.get('/list', listUsers);

// Auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
//router.post("/auth/update-profile", authMiddleware, authController.updateProfile);
//router.get("/auth/me", authMiddleware, authController.me);
//router.put("/auth/profile", authMiddleware, authController.profile);

export default router;