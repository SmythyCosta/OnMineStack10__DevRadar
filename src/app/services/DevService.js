const github = require('../../config/github');
const Dev = require('../models/Dev');

/**
 * 
 * Padrao adotados para os metodos
 * 
 * index, show, store, update, destroy
 */

 module.exports = {

    async listDevs(req, res) {
        const devs = await Dev.find();
        return devs;
      },

    async validateUsername(github_username) {
        const dev = Dev.findOne({ github_username })
        return dev
    },

    async getUserData(github_username) {
        const response = await github.get(`/${github_username}`);
        return response;
    },


 }
