import express from 'express'
import UserController from '../Controller/UserController';

export const userRouter = express.Router()

userRouter.post('/signup', UserController.createUser)

userRouter.post('/login', UserController.login)

userRouter.post('/follow/:id', UserController.followById)