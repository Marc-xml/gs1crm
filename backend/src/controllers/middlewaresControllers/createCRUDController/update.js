const update = async (Model, req, res) => {
  try {
    // Extracting the document ID from the request parameters
    const { id } = req.params;

    // Finding the document by ID and updating its properties
    const result = await Model.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!result) {
      // If the document with the specified ID is not found
      return res.status(404).json({
        success: false,
        message: 'Document not found',
      });
    }

    // Returning successful response
    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully updated the document in Model',
    });
  } catch (error) {
    // Handling error response
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to update the document in Model',
    });
  }
};

module.exports = update;