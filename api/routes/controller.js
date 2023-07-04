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
  const { id } = req.params;

  const result = await memberModel.find({ _id: id }).then(result => {
    let todDay = new Date();
    let date = result[0].date;

    let reset = fns.differenceInHours(new Date(todDay), new Date(date));
    console.log(reset);
    if (reset >= 1) {
      const User = memberModel
        .findByIdAndUpdate(id, {
          date: new Date(),
        })
        .then(result => {
          User.date = new Date();
          result.save();
        });
    }
    res.status(200).json(result);
  });
};
