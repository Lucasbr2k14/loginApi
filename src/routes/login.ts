import { Router } from "express"
import { login } from "../services/login"

const router = Router()
router.post("/login", login)

export default router