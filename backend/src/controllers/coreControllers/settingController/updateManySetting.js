const mongoose = require('mongoose');

const Model = mongoose.model('Setting');

const updateManySetting = async (req, res) => {
  const filter = req.body.filter || {};
  const update = req.body.update || {};

  try {
    const updatedSettings = await Model.updateMany(filter, update).exec();

    return res.status(200).json({
      success: true,
      result: updatedSettings,
      message: 'Settings updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: null,
      message: 'An error occurred while updating the settings',
      error: error.message,
    });
  }
};

module.exports = updateManySetting;