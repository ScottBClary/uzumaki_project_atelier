const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/:rfc2204/',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios(options);
};

module.exports.getReposByUsername = getReposByUsername;