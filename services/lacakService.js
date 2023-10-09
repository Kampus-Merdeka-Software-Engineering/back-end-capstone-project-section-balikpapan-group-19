const { prisma } = require('../config/prisma');

async function getAllLacak(noresi) {
  try {
    const lacak = await prisma.pelacakan.findFirst({
      where: {
        "no_resi": Number(noresi),
      }
    });
    console.log(lacak)

    return {
      Pelacakan: lacak
    };
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}



module.exports = {
  getAllLacak
};