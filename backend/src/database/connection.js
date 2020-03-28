const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);//development é onde tem o caminho do banco de dados no arquivo knexfile.js

module.exports = connection;