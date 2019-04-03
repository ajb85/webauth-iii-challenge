const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      username: "sam",
      password: bcrypt.hashSync("sampass", 4),
      department: "Returns"
    },
    {
      id: 2,
      username: "frodo",
      password: bcrypt.hashSync("frodopass", 4),
      department: "Logistics"
    },
    {
      id: 3,
      username: "gandalf",
      password: bcrypt.hashSync("gandolfpass", 4),
      department: "CS"
    }
  ]);
};
