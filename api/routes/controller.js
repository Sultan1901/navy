const memberModel = require('./../db/members');

// add ,delete,update ,get => functions control the posts
const addMember = (req, res) => {
  const { name, position } = req.body;

  const newmember = new memberModel({
    name,
    position,
  });
  newmember
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = addMember;
