const express = require('express');
const addMember = require('./controller');

const memberRouter = express.Router();
 memberRouter.post('/addmember', addMember);
// postRouter.get('/getPost', authentication, getPost);
// postRouter.get('/getPostById/:id', authentication, getPostById);
// postRouter.delete('/deletePost/:id', authentication, deletePost);
// postRouter.put('/updatePost/:id', authentication, updatePost);


module.exports = memberRouter