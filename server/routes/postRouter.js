const router = require('express').Router();
const postCtrl = require('../controllers/postCtrl');

router.post('/createpost', postCtrl.createPost);

router.get('/getposts', postCtrl.getPosts);

router.patch('/updatepost/:id', postCtrl.updatePost);

router.delete('/deletepost/:id', postCtrl.deletePost);

module.exports = router;