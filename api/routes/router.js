const express = require('express');
const controller = require('./controller');

const memberRouter = express.Router();
memberRouter.post('/addMember', controller.addMember);
memberRouter.get('/getMember', controller.getMember);
memberRouter.delete('/deleteMember/:id', controller.deleteMember);
memberRouter.put('/updateMember/:id', controller.updateMember);
memberRouter.put('/updateDate/:id', controller.resetDuty);


module.exports = memberRouter;
