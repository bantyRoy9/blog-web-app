import express from 'express'
import { createpost, getAllPosts, getPost } from '../post-controller/postcontroller.js'

const router = express.Router();

router.post('/create',createpost);
router.get('/posts',getAllPosts);
router.get('/post/:id', getPost);

export default router