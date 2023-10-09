const { lacakService } = require('../services');

async function getLacak(req, res)  {
  const noresi = req.query.noresi

  const lacak = await lacakService.getAllLacak(noresi);

  res.status(201).json({
    message: 'Tracking Succeed'
  });
}

module.exports = {
  getLacak
};