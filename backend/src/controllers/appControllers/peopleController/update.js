const update = async (Model, req, res) => {
  try {
    const result = await Model.findOneAndUpdate(
      {
        _id: req.params.id,
        removed: false,
      },
      req.body,
      { new: true }
    )
      .populate('company', 'name')
      .exec();

    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: 'No document found',
      });
    }

    return res.status(200).json({
      success: true,
      result,
      message: 'Data updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: null,
      message: 'An error occurred while updating the Data',
      error: error.message,
    });
  }
};

module.exports = update;