import express from 'express'
import { getPosts, createPost, updatePost, deletePost, likePost, getPost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)
router.get('/:id/likePost', getPost)


export default router