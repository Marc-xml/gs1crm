const mongoose = require('mongoose');

const Model = mongoose.model('Payment');
const Invoice = mongoose.model('Invoice');

const deleteInvoice = async (req, res) => {
  const paymentId = req.params.id;

  // Deleting the document from the collection
  const deletedPayment = await Model.findByIdAndDelete(paymentId).exec();

  if (!deletedPayment) {
    return res.status(404).json({
      success: false,
      message: 'Payment not found',
    });
  }

  // Remove the payment reference from the associated invoice
  await Invoice.updateOne(
    { _id: deletedPayment.invoice },
    { $pull: { payment: paymentId } }
  ).exec();

  return res.status(200).json({
    success: true,
    message: 'Payment invoice deleted successfully',
  });
};

module.exports = deleteInvoice;