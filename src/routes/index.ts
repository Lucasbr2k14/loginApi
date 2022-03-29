import { Router } from "express"
import { index } from "../services/index"

const router = Router()
router.get("/", index)

export default router
