const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRoutes = require("./auth/routes.js");
const userRoutes = require("./users/routes.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRoutes);
server.use("/api/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Still alive");
});

module.exports = server;
