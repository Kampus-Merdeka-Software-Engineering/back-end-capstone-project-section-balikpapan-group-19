const { priceService } = require('../services');

async function getPrice(req, res)  {
  const origin = req.query.origin
  const destination = req.query.destination
  const weight = req.query.weight

  const price = await priceService.getPriceService(origin, destination, weight);

  res.status(201).json({
    message: 'price created'
  });
}


module.exports = {
  getPrice
};