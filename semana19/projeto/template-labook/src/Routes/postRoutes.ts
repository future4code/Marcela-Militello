import express from 'express'
import PostController from '../Controller/PostController';

export const postRouter = express.Router()

postRouter.post('/create', PostController.createPost)

postRouter.get('/:id', PostController.getPostById)