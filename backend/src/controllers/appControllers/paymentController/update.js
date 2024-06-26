const mongoose = require('mongoose');

const Model = mongoose.model('Payment');
const Invoice = mongoose.model('Invoice');
const custom = require('@/controllers/pdfController');

const { calculate } = require('@/helpers');

const update = async (req, res) => {
  const paymentId = req.params.id;

  // Updating the document in the collection
  const payment = await Model.findById(paymentId).exec();
  if (!payment) {
    return res.status(404).json({
      success: false,
      message: 'Payment not found',
    });
  }

  if (req.body.amount === 0) {
    return res.status(202).json({
      success: false,
      result: null,
      message: `The Minimum Amount couldn't be 0`,
    });
  }

  const currentInvoice = await Invoice.findOne({
    _id: req.body.invoice,
    removed: false,
  });

  const {
    total: previousTotal,
    discount: previousDiscount,
    credit: previousCredit,
  } = currentInvoice;

  const maxAmount = calculate.sub(
    calculate.sub(previousTotal, previousDiscount),
    previousCredit
  );

  if (req.body.amount > maxAmount) {
    return res.status(202).json({
      success: false,
      result: null,
      message: `The Max Amount you can add is ${maxAmount}`,
    });
  }

  const updatedPayment = {
    ...req.body,
    createdBy: req.admin._id,
  };

  const updateResult = await Model.findByIdAndUpdate(paymentId, updatedPayment, {
    new: true,
  }).exec();

  // Returning successful response
  return res.status(200).json({
    success: true,
    result: updateResult,
    message: 'Payment invoice updated successfully',
  });
};

module.exports = update;