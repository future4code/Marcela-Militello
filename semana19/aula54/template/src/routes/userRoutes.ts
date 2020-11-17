import express from 'express'
import createUser from "../controller/user/createUser"
import login from "../controller/user/login"
import edit from "../controller/user/editUser"
import getUserById from "../controller/user/getUserById"

export const userRouter = express.Router()

userRouter.post("/signup", createUser)
userRouter.post("/login", login)
userRouter.post("/edit", editUser)
userRouter.get("/:id", getUserById)