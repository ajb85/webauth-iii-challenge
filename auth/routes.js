const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = require("./shhSecrets.js").jswSecret;
const Users = require("../users/users-model.js");

const restricted = require("./restrict.js");
