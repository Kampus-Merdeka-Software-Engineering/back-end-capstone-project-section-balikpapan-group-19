const { prisma } = require('../config/prisma');


async function getPriceService(origin, destination, weight) {
  try {
    const basePrice = await prisma.pengiriman.findFirst({
      where: {
        AND: [
          {"kota_asal": origin},
          {"kota_tujuan": destination},
          {"berat_kg": Number(weight)}
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