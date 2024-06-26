const mongoose = require('mongoose');

const Model = mongoose.model('Offer');

const custom = require('@/controllers/pdfController');

const { calculate } = require('@/helpers');
const { increaseBySettingKey } = require('@/middlewares/settings');

const update = async (req, res) => {
  const offerId = req.params.id;
  const { items = [], taxRate = 0, discount = 0 } = req.body;

  // default
  let subTotal = 0;
  let taxTotal = 0;
  let total = 0;

  // Calculate the items array with subTotal, total, taxTotal
  items.map((item) => {
    let total = calculate.multiply(item['quantity'], item['price']);
    // sub total
    subTotal = calculate.add(subTotal, total);
    // item total
    item['total'] = total;
  });
  taxTotal = calculate.multiply(subTotal, taxRate / 100);
  total = calculate.add(subTotal, taxTotal);

  let body = req.body;

  body['subTotal'] = subTotal;
  body['taxTotal'] = taxTotal;
  body['total'] = total;
  body['items'] = items;

  // Updating the document in the collection
  const updateResult = await Model.findByIdAndUpdate(offerId, body, {
    new: true,
  }).exec();

  // Returning successful response
  return res.status(200).json({
    success: true,
    result: updateResult,
    message: 'Offer updated successfully',
  });
};

module.exports = update;