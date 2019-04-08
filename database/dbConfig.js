const knex = require("knex");

const dev = require("../knexfile.js").development;

module.exports = knex(dev);
