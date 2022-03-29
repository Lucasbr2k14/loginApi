import { Router } from "express"
import { createUser, verifyUsersData } from "../services/userAdd"

const router = Router()
router.post("/user-add", verifyUsersData, createUser)

export default router
