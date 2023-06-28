const memberModel = require('./../db/members');

module.exports.addMember = (req, res) => {
  try {
    const { name, patrol, day, position, active, date } = req.body;
    const newMember = new memberModel({
      name,
      patrol,
      day,
      position,
      active,
      date,
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
module.exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    await memberModel.findByIdAndRemove(id).then(result => {
      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, patrol, day, position, active, date } = req.body;
  try {
    await memberModel
      .findByIdAndUpdate(id, {
        name,
        patrol,
        day,
        position,
        active,
        date,
      })
      .then(result => {
        res.status(200).json(result);
      });
  } catch (error) {
    console.log(error);
  }
};
