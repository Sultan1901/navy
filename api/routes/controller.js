const memberModel = require('./../db/members');

module.exports.addMember = (req, res) => {
  try {
    const { name, position } = req.body;
    const newMember = new memberModel({
      name,
      position,
    });
    newMember
      .save()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getMember = (req, res) => {
  try {
    memberModel.find({}).then(result => {
      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
  }
};
