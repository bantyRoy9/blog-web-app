import express from 'express'
import { createpost, getAllPosts, getPost, updatePost , deletePost } from '../post-controller/postcontroller.js'
import { uploadImage } from '../post-controller/imagecontroller.js'
import { upload } from '../utils/upload.js'
const router = express.Router();

router.post('/create',createpost);
router.get('/posts',getAllPosts);
router.get('/post/:id', getPost);
router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);
router.post('/file/upload', upload.single("file"), uploadImage);

export default router