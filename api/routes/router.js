const express = require('express');
const controller = require('./controller');

const memberRouter = express.Router();
memberRouter.post('/addMember', controller.addMember);
memberRouter.get('/getMember', controller.getMember);

module.exports = memberRouter;
