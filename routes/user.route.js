import express from 'express'
import { userRegister, verifyUser } from '../controller/user.controller.js'

const router = express.Router()

router.post("/register", userRegister)
router.get("/verify/:token", verifyUser)

export default router