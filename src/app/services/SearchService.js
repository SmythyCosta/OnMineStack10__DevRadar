const Dev = require('../models/Dev');

/**
 * 
 * buscar todos os devs em um raio 10km
 * filtrar por technologias
 * 
 * @param {*} latitude 
 * @param {*} longitude 
 * @param {*} techs 
 */
const searchDevs = async (latitude, longitude, techs) => {

    const techsLowerCase = techs.map(tech => tech.toLowerCase())
    
    // Mongo Operators
    // https://docs.mongodb.com/manual/reference/operator/query/
    const devs = await Dev.find({
      techs: {
        $in: techsLowerCase,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000000,
        },
      },
    })
    return devs;
}

module.exports = searchDevs;