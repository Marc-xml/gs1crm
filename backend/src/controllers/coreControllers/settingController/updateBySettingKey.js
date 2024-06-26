const mongoose = require('mongoose');

const Model = mongoose.model('Setting');

const updateBySettingKey = async (req, res) => {
  const settingKey = req.params.settingKey || undefined;

  if (!settingKey) {
    return res.status(202).json({
      success: false,
      result: null,
      message: 'No settingKey provided',
    });
  }

  const update = req.body;

  try {
    const updatedSetting = await Model.findOneAndUpdate(
      { settingKey },
      update,
      { new: true }
    ).exec();

    if (!updatedSetting) {
      return res.status(404).json({
        success: false,
        result: null,
        message: 'No document found by this settingKey: ' + settingKey,
      });
    }

    return res.status(200).json({
      success: true,
      result: updatedSetting,
      message: 'Setting updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: null,
      message: 'An error occurred while updating the setting',
      error: error.message,
    });
  }
};

module.exports = updateBySettingKey;