const router = require("express").Router();
const db = require("./users-model.js");
const restricted = require("../auth/restrict.js");

router.get("/", restricted, async (req, res) => {
  const users = await db.find();
  res.status(200).json(users);
});

module.exports = router;
