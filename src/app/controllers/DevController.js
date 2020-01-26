const parseStringAsArray = require('../utils/parseStringAsArray');
const pinPointLocation = require('../utils/pinPointLocation');
const { listDevs,
    validateUsername,
    getUserData,
    createDev,
    updateDevData,
    findDevToDelete,
    deleteDev
    } = require('../services/DevService');


module.exports = {

    async index(req, res) {
        const devs = await listDevs()
        return res.json(devs);
    },

};
