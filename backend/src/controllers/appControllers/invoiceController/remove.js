const remove = async (req, res) => {
  const { id } = req.params;

  try {
    // Finding the document by ID and deleting it
    const result = await Model.findByIdAndDelete(id);

    if (!result) {
      // If the document with the specified ID is not found
      return res.status(404).json({
        success: false,
        message: 'Invoice not found',
      });
    }

    // Returning successful response
    return res.status(200).json({
      success: true,
      result,
      message: 'Invoice removed successfully',
    });
  } catch (error) {
    // Handling error response
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to remove the invoice',
    });
  }
};

module.exports = remove;