import express from 'express'
import { userRegister } from '../controller/user.controller.js'

const router = express.Router()

router.get("/register", userRegister)

export default router