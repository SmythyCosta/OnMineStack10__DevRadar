const github = require('../../config/github');
const Dev = require('../models/Dev');

/**
 * 
 * Padrao adotados para os metodos
 * 
 * index, show, store, update, destroy
 */

 module.exports = {

    async validateUsername(github_username) {
        const dev = Dev.findOne({ github_username })
        return dev
    },

    
 }
