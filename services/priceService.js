const { prisma } = require('../config/prisma');


async function getPriceService(origin, destination, weight) {
  try {
    const basePrice = await prisma.tarif.findFirst({
      where: {
        AND: [
          {origin: origin},
          {destination: destination},
          {weight: weight}
        ]
      }
    })
    console.log(basePrice)

    const finalPrice = basePrice.price * weight;
    return {
      Price: finalPrice
    }
  
  } catch (error) {
    console.error(error.message);

    throw new Error()
  }
}


module.exports = {
  getPriceService
};