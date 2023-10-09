const { getpriceService } = require('../services');

const GET = async function getPrice(req, res)  {
  const origin = req.query.origin
  const destination = req.query.origin
  const weight = req.query.origin

  const price = await getpriceService.getPrice(origin, destination, weight);

  res.status(201).json({
    message: 'price created'
  });
}


module.exports = {
  getPrice
};