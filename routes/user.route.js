import express from 'express';
import { userRegister, verifyUser, userLogin } from '../controller/user.controller.js';

const router = express.Router()

router.post("/register", userRegister)
router.get("/verify/:token", verifyUser)
router.get("/login", userLogin)

export default router