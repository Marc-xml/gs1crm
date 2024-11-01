const mongoose = require('mongoose');
const People = mongoose.model('People');
const Company = mongoose.model('Company');

const update = async (Model, req, res) => {
  const documentId = req.params.id;

  // Updating the document in the collection
  const document = await Model.findById(documentId).exec();
  if (!document) {
    return res.status(404).json({
      success: false,
      message: 'Document not found',
    });
  }

  if (req.body.type === 'people') {
    if (!req.body.people) {
      return res.status(403).json({
        success: false,
        message: 'Please select a people',
      });
    } else {
      let { firstname, lastname } = await People.findOne({
        _id: req.body.people,
        removed: false,
      }).exec();
      req.body.name = firstname + ' ' + lastname;
      req.body.company = null;
    }
  } else {
    if (!req.body.company) {
      return res.status(403).json({
        success: false,
        message: 'Please select a company',
      });
    } else {
      let { name } = await Company.findOne({
        _id: req.body.company,
        removed: false,
      }).exec();
      req.body.name = name;
      req.body.people = null;
    }
  }

  const updateResult = await Model.findByIdAndUpdate(documentId, req.body, {
    new: true,
  }).exec();

  // Returning successful response
  return res.status(200).json({
    success: true,
    result: updateResult,
    message: 'Document updated successfully',
  });
};

module.exports = update;