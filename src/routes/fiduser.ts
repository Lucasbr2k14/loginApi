import { Router } from "express"
import { findUser } from "../services/findUser"

const router = Router()
router.get("/user/:token", findUser)

export default router