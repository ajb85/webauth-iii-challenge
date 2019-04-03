const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findBy,
  register
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function register(user) {
  const [id] = await db("users").insert(user);

  return findBy({ id }).first();
}
