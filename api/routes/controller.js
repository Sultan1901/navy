const memberModel = require('./../db/members');
const fns = require('date-fns');

module.exports.addMember = (req, res) => {
  try {
    const { member, patrol, day, position, active, date } = req.body;
    const newMember = new memberModel({
      member,
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
  const { member, patrol, day, position, active, date } = req.body;
  try {
    await memberModel
      .findByIdAndUpdate(id, {
        member,
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
module.exports.resetDuty = async (req, res) => {
  await memberModel.find({}).then(result => {
    let todDay = new Date();
    let date;
    for (const key in result) {
      date = result[key].date;
      let reset = fns.differenceInHours(new Date(todDay), new Date(date));
      console.log(reset);
      if (reset >= 72) {
        memberModel.find({}).then(result => {
          result[key].date = new Date();
          result[key].save();
        });
      }
    }

    res.status(200).json(result);
  });
};
module.exports.getById = async (req, res) => {
  const id = req.query.id;
  try {
    await memberModel.findById(id).then(result => {
      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
  }
};
