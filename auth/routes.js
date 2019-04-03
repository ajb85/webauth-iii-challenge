const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = require("./shhSecrets.js").jswSecret;
const Users = require("../users/users-model.js");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;
    const hashedPass = bcrypt.hashSync(user.password, 4);
    user.password = hashdPass;

    const newAccount = await Users.register(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal error making that account" });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(user.password && password)) {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: `Logged in as: ${user.username}`, token });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error logging in" });
  }
});

function generateToken(user) {}
