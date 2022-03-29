import { Router } from "express"
import { findAll } from "../services/users"

const router = Router()
router.get("/users", findAll)

export default router
