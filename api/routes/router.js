const express = require('express');
const controller = require('./controller');

const memberRouter = express.Router();
memberRouter.post('/addMember', controller.addMember);
memberRouter.get('/getMember', controller.getMember);
memberRouter.get('/getOne', controller.getById);
memberRouter.delete('/deleteMember/:id', controller.deleteMember);
memberRouter.put('/updateMember/:id', controller.updateMember);
memberRouter.put('/updateDate', controller.resetDuty);

module.exports = memberRouter;
