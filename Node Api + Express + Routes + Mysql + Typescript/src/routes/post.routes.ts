import { Router } from 'express'
import { getPosts, createPost, addHoras, getPost, deletePost, updatePost } from '../controllers/post.controller'

const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/hora')
    .post(addHoras);    

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;